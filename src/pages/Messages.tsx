import { useState } from 'react';
import { Send, ArrowLeft, UserCircle2, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Messages = () => {
    const { t } = useTranslation();
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
    const [messageInput, setMessageInput] = useState('');
    
    // We'll manage the messages state to allow adding new mock messages
    const [chats, setChats] = useState([
        {
            id: 1,
            name: t('dashboard.messages.mock.c1', 'Vorstandsgruppe'),
            messages: [
                { id: 1, text: t('dashboard.messages.mock.m1', 'Ist das Budget für das Sommerfest schon freigegeben?'), sender: 'other', time: '10:30' }
            ]
        },
        {
            id: 2,
            name: t('dashboard.messages.mock.c2', 'Buchhaltung'),
            messages: [
                { id: 1, text: t('dashboard.messages.mock.m2', 'Rechnung für die neuen Laptops ist eingegangen.'), sender: 'other', time: 'Yesterday' }
            ]
        },
        {
            id: 3,
            name: t('dashboard.messages.mock.c3', 'Projektplanung'),
            messages: [
                { id: 1, text: t('dashboard.messages.mock.m3', 'Wir brauchen noch Helfer für den Elternsprechtag.'), sender: 'other', time: '2 days ago' }
            ]
        }
    ]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!messageInput.trim() || selectedChat === null) return;

        setChats(prevChats => prevChats.map(chat => {
            if (chat.id === selectedChat) {
                return {
                    ...chat,
                    messages: [
                        ...chat.messages,
                        {
                            id: Date.now(),
                            text: messageInput,
                            sender: 'me',
                            time: 'Just now'
                        }
                    ]
                };
            }
            return chat;
        }));
        
        setMessageInput('');
    };

    const activeChat = chats.find(c => c.id === selectedChat);

    return (
        <div className="h-[calc(100vh-theme(spacing.24))] sm:h-[calc(100vh-theme(spacing.16))] flex flex-col pt-0">
            <SEO title={t('dashboard.messages.title')} description="Messages" />
            
            <div className="flex justify-between items-center px-4 md:px-6 py-4 md:py-6 shrink-0">
                <h1 className="text-3xl font-black text-foreground tracking-tighter">{t('dashboard.messages.title')}</h1>
            </div>

            <div className="flex-1 overflow-hidden px-4 md:px-6 pb-6">
                <div className="bg-card rounded-3xl border border-border shadow-2xl flex h-full overflow-hidden">
                    
                    {/* Left Column: Chat List */}
                    <div className={cn(
                        "w-full md:w-1/3 flex flex-col border-r border-border",
                        selectedChat !== null ? "hidden md:flex" : "flex"
                    )}>
                        <div className="p-4 border-b border-border bg-muted/30">
                            <h2 className="text-sm font-black text-foreground/40 uppercase tracking-widest">{t('dashboard.messages.title')}</h2>
                        </div>
                        <div className="overflow-y-auto flex-1">
                            {chats.map(chat => (
                                <button
                                    key={chat.id}
                                    onClick={() => setSelectedChat(chat.id)}
                                    className={cn(
                                        "w-full text-left p-4 border-b border-border/50 hover:bg-primary/5 transition-colors flex items-center gap-4",
                                        selectedChat === chat.id ? "bg-primary/10 border-l-4 border-l-primary" : "border-l-4 border-l-transparent"
                                    )}
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                        <UserCircle2 size={24} />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h3 className="font-bold text-foreground truncate">{chat.name}</h3>
                                        <p className="text-sm text-foreground/60 truncate">{chat.messages[chat.messages.length - 1].text}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Chat Thread */}
                    <div className={cn(
                        "w-full md:w-2/3 flex flex-col bg-background/50",
                        selectedChat === null ? "hidden md:flex items-center justify-center" : "flex"
                    )}>
                        {selectedChat === null ? (
                            <div className="text-center text-foreground/40 p-8">
                                <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                                <p className="font-medium">{t('dashboard.messages.empty')}</p>
                            </div>
                        ) : (
                            <>
                                {/* Thread Header */}
                                <div className="p-4 border-b border-border bg-card flex items-center gap-4 shrink-0">
                                    <button 
                                        onClick={() => setSelectedChat(null)}
                                        className="md:hidden p-2 -ml-2 text-foreground/60 hover:text-foreground"
                                    >
                                        <ArrowLeft size={20} />
                                    </button>
                                    <h2 className="font-bold text-lg text-foreground">{activeChat?.name}</h2>
                                </div>

                                {/* Messages Area */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {activeChat?.messages.map((msg) => (
                                        <div 
                                            key={msg.id} 
                                            className={cn(
                                                "max-w-[80%] rounded-2xl p-4",
                                                msg.sender === 'me' 
                                                    ? "bg-primary text-primary-foreground ml-auto rounded-tr-sm" 
                                                    : "bg-surface border border-border text-foreground mr-auto rounded-tl-sm"
                                            )}
                                        >
                                            <p className="text-sm md:text-base">{msg.text}</p>
                                            <p className={cn(
                                                "text-[10px] mt-2 font-bold uppercase tracking-widest",
                                                msg.sender === 'me' ? "text-primary-foreground/70" : "text-foreground/40"
                                            )}>{msg.time}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Input Area */}
                                <div className="p-4 bg-card border-t border-border shrink-0">
                                    <form onSubmit={handleSendMessage} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={messageInput}
                                            onChange={(e) => setMessageInput(e.target.value)}
                                            placeholder={t('dashboard.messages.placeholder') || "Write a message..."}
                                            className="flex-1 bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                        />
                                        <button 
                                            type="submit"
                                            disabled={!messageInput.trim()}
                                            className="bg-primary text-primary-foreground p-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Send size={20} />
                                        </button>
                                    </form>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
