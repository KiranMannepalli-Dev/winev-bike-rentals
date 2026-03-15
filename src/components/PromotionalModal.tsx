"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, X, Gift, Send, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function PromotionalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show modal after 3 seconds, only once per session
    const hasSeenPromo = sessionStorage.getItem("hasSeenWelcomePromo");
    
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenWelcomePromo", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const copyCoupon = () => {
    navigator.clipboard.writeText("WINEV10");
    setCopied(true);
    toast({
      title: "Coupon Copied!",
      description: "Use WINEV10 at checkout to get 10% off your first ride.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none bg-transparent shadow-2xl">
        <div className="relative group">
          {/* Main Background with Premium Gradient */}
          <div className="bg-zinc-950 text-white p-8 rounded-2xl relative overflow-hidden border border-white/10">
            {/* Decorative Background Elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Close Button Override */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 text-white/40 hover:text-white hover:bg-white/10 rounded-full h-8 w-8 z-50"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Animated Icon Container */}
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 12, delay: 0.2 }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-6"
              >
                <Gift className="h-8 w-8 text-zinc-950" />
              </motion.div>

              <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
                Limited Time Offer
              </Badge>

              <DialogTitle className="text-3xl font-headline font-bold tracking-tight mb-2 text-white">
                Ride Smarter, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-300">Save Greener.</span>
              </DialogTitle>

              <DialogDescription className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-[280px]">
                Get <span className="text-white font-bold">10% OFF</span> on your first ride with Winev. Experience the best EV fleet in Hyderabad.
              </DialogDescription>

              {/* Coupon Code Box */}
              <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex items-center justify-between group/coupon hover:border-primary/50 transition-colors">
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">Coupon Code</p>
                  <p className="text-xl font-mono font-bold text-white tracking-widest">WINEV10</p>
                </div>
                <Button 
                  onClick={copyCoupon}
                  variant="ghost" 
                  className={`h-10 px-4 rounded-lg transition-all ${copied ? 'bg-primary text-zinc-950' : 'bg-white/10 hover:bg-primary hover:text-zinc-950 text-white'}`}
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex flex-col w-full gap-3">
                <Button 
                  size="lg" 
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-zinc-950 font-bold h-12 shadow-xl shadow-primary/10 transition-all hover:scale-[1.02]"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Claim My Discount
                </Button>
                <p className="text-[10px] text-zinc-500 italic">
                  *Offer valid for new riders only. T&C Apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
