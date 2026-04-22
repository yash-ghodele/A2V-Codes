"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Gift, Loader2, CheckCircle } from "lucide-react";

export function LeadMagnet() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    whatsapp: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        type: "lead_magnet",
        timestamp: serverTimestamp(),
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error adding lead:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-primary/10 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border-primary/20">
          <div className="lg:w-1/2">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--primary),0.4)]">
              <Gift className="w-8 h-8 text-background" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Free EE Project <span className="text-primary">Idea Guide</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Struggling to find a unique idea? Download our curated list of 50+ 
              Engineering Exploration project ideas that examiners love.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>Used by 500+ FY students to choose projects that actually impress examiners.</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-background/50 rounded-3xl border border-primary/20"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Guide Sent!</h3>
                <p className="text-muted-foreground">Check your WhatsApp for the download link shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  required
                  placeholder="Full Name"
                  className="h-14 rounded-2xl bg-background/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  required
                  placeholder="Branch (e.g. CSE, ECE)"
                  className="h-14 rounded-2xl bg-background/50"
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                />
                <Input
                  required
                  type="tel"
                  placeholder="WhatsApp Number"
                  className="h-14 rounded-2xl bg-background/50"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
                <Button 
                  disabled={loading}
                  type="submit" 
                  className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20"
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : "Get Free Guide"}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  We value your privacy. No spam, only engineering excellence.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
