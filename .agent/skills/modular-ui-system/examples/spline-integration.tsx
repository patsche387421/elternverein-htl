/**
 * Spline Scene Integration – SceneAdapter Pattern
 *
 * Skill: modular-ui-system
 * Pattern: [Input/Steuerung] → SceneAdapter → [Logik/Berechnung] → [Output/Visuelles]
 *
 * Dependencies:
 *   npm install @splinetool/react-spline @splinetool/runtime
 */

import { useRef, useCallback, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { emit, on } from '@/lib/SignalBus';
import { createSignalBusAdapter } from '@/lib/SceneAdapter';
import type { SceneEvent } from '@/lib/SceneAdapter';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface SplineSceneProps {
    /** URL to the .splinecode scene file */
    sceneUrl: string;
    /** Optional: specific Spline object names to listen for interactions */
    interactiveObjects?: string[];
    /** Called when the scene has fully loaded */
    onSceneReady?: () => void;
    className?: string;
}

// ─────────────────────────────────────────────
// SplineSceneNode – Output/Visual Layer
// ─────────────────────────────────────────────

export function SplineSceneNode({
    sceneUrl,
    interactiveObjects = [],
    onSceneReady,
    className,
}: SplineSceneProps) {
    // Ref to the Spline Application for imperative control
    const splineRef = useRef<Application | null>(null);
    const adapter = createSignalBusAdapter();

    // ── [Input] Scene Loaded Event ────────────────
    const handleLoad = useCallback(
        (splineApp: Application) => {
            splineRef.current = splineApp;
            adapter.onLoad();
            onSceneReady?.();
        },
        [adapter, onSceneReady]
    );

    // ── [Input] Spline Object Click → SceneEvent ──
    const handleSplineMouseDown = useCallback(
        (e: { target: { name: string };[key: string]: unknown }) => {
            const objectName = e.target?.name ?? 'unknown';

            // Filter: only emit for registered interactive objects (or all if empty)
            if (interactiveObjects.length === 0 || interactiveObjects.includes(objectName)) {
                const sceneEvent: SceneEvent = {
                    type: 'click',
                    objectName,
                    data: { rawEvent: e },
                };
                adapter.onInteract(sceneEvent);
            }
        },
        [adapter, interactiveObjects]
    );

    // ── [Input] Listen for external data → update Spline variables ──
    useEffect(() => {
        const controller = new AbortController();

        // Example: Listen for theme changes and push them into the Spline scene
        on<{ hex: string; hsl: string }>(
            'theme:primaryColor',
            ({ hex }) => {
                if (!splineRef.current) return;
                // Spline exposes setVariable for dynamic material/color control
                try {
                    splineRef.current.setVariable?.('primaryColor', hex);
                } catch {
                    // Spline variable may not exist in all scenes – fail silently
                }
            },
            controller.signal
        );

        // Example: Listen for data updates from React and pass to Spline
        on<{ label: string; value: number }>(
            'data:update',
            ({ label, value }) => {
                if (!splineRef.current) return;
                try {
                    splineRef.current.setVariable?.(label, value);
                } catch { }
            },
            controller.signal
        );

        return () => controller.abort();
    }, []);

    // ── [Output/Visual] Render ────────────────────
    return (
        <div
            className={className ?? 'w-full h-full relative'}
            aria-label="3D Scene"
            role="img"
        >
            <Spline
                scene={sceneUrl}
                onLoad={handleLoad}
                onSplineMouseDown={handleSplineMouseDown}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

// ─────────────────────────────────────────────
// Data-Stitching: React State → Spline
// ─────────────────────────────────────────────

/**
 * Hook: useSceneDataStitch
 *
 * Bridges React state to the Spline scene via SignalBus.
 * Call this in any parent component to "stitch" data into the scene.
 *
 * @example
 * const { pushData } = useSceneDataStitch();
 * pushData('memberCount', 248); // updates Spline variable "memberCount"
 */
export function useSceneDataStitch() {
    const pushData = useCallback((label: string, value: number | string) => {
        emit('data:update', { label, value });
    }, []);

    const pushTheme = useCallback((hex: string, hsl: string) => {
        emit('theme:primaryColor', { hex, hsl });
    }, []);

    return { pushData, pushTheme };
}

// ─────────────────────────────────────────────
// Usage Example (for documentation)
// ─────────────────────────────────────────────

/*
// In a page component:

import { SplineSceneNode, useSceneDataStitch } from '@/components/SplineSceneNode';

function HomePage() {
  const { pushData, pushTheme } = useSceneDataStitch();

  // Push data into the 3D scene when React state changes
  useEffect(() => {
    pushData('memberCount', 248);
    pushTheme('#2563eb', '217 91% 60%');
  }, []);

  return (
    <div className="relative w-full h-screen">
      <SplineSceneNode
        sceneUrl="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
        interactiveObjects={['ButtonPrimary', 'CardHover']}
        onSceneReady={() => console.log('Scene ready')}
        className="absolute inset-0"
      />
      <div className="relative z-10 p-8">
        <h1>Content overlaid on 3D scene</h1>
      </div>
    </div>
  );
}
*/
