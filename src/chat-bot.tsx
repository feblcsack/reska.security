"use client";

import { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebaseConfig"; // Import konfigurasi Firebase
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

interface Comment {
  id: string;
  sender: string;
  content: string;
  timestamp: number;
}

export default function CommentSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Load comments from Firestore
  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      orderBy("timestamp", "asc") // Sort comments by timestamp
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData: Comment[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        sender: doc.data().sender,
        content: doc.data().content,
        timestamp: doc.data().timestamp,
      }));
      setComments(commentsData);

      // Scroll to the latest comment
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop =
          scrollAreaRef.current.scrollHeight;
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (input.trim()) {
      try {
        await addDoc(collection(db, "comments"), {
          sender: "User",
          content: input.trim(),
          timestamp: Date.now(), // Add timestamp for sorting
        });
        setInput(""); // Clear input field after sending
      } catch (error) {
        console.error("Error adding comment: ", error);
      }
    }
  };

  const handleOpen = () => {
    setIsOpen(true);

    // Scroll to the bottom when the comment section is opened
    setTimeout(() => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
      }
    }, 300);
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 p-0 bg-yellow hover:bg-yellow/80 text-white shadow-lg"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={`scale-75 md:scale-90 sm:max-w-[400px] p-5 mt-0 overflow-hidden bg-white z-[99999] ${isOpen ? "slide-in" : ""}`}>
          <DialogHeader className="p-4 border-b">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/icon/avatar.png" />
                <AvatarFallback>CM</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle>
                  <span className="text-primary-100 font-bold">Comment</span>
                  <span className="text-yellow font-bold">System</span>
                </DialogTitle>
                <p className="text-sm text-gray-500">Tulis komentar Anda di sini</p>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="h-[350px] p-4 bg-white overflow-y-auto" ref={scrollAreaRef}>
            {comments.map((comment) => (
              <div
                key={comment.id}
                className={`flex ${
                  comment.sender === "User" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    comment.sender === "User"
                      ? "bg-primary-100 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {comment.content}
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex space-x-2"
            >
              <Input
                className="flex-grow"
                placeholder="Tulis komentar..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className="scale-150 text-primary-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-4.586 2.597a1 1 0 01-1.49-.868v-5.194a1 1 0 011.49-.868l4.586 2.597a1 1 0 010 1.736z"
                  />
                </svg>
              </Button>
            </form>
          </div>
          <div className="p-2 border-t text-center text-xs text-gray-500">
            Didukung oleh <span className="text-primary-100 font-bold">RMU</span>
            <span className="text-yellow font-bold">Comment</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
