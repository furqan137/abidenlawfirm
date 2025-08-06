"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Edit, Trash2, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
  language: "he" | "en"
}

export default function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "חשיבות הליווי המשפטי ברכישת דירה",
      content: "רכישת דירה היא אחת ההחלטות הכלכליות החשובות ביותר בחיים...",
      date: "2024-01-15",
      language: "he",
    },
  ])

  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isCreating, setIsCreating] = useState(false)

  const handleSave = (post: BlogPost) => {
    if (editingPost) {
      setPosts(posts.map((p) => (p.id === post.id ? post : p)))
    } else {
      setPosts([...posts, { ...post, id: Date.now().toString() }])
    }
    setEditingPost(null)
    setIsCreating(false)
  }

  const handleDelete = (id: string) => {
    setPosts(posts.filter((p) => p.id !== id))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">ניהול פוסטים</h1>
        <Button onClick={() => setIsCreating(true)} className="bg-amber-600 hover:bg-amber-700">
          <Plus className="w-4 h-4 mr-2" />
          פוסט חדש
        </Button>
      </div>

      {(isCreating || editingPost) && (
        <BlogEditor
          post={editingPost}
          onSave={handleSave}
          onCancel={() => {
            setEditingPost(null)
            setIsCreating(false)
          }}
        />
      )}

      <div className="grid gap-4">
        {posts.map((post) => (
          <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setEditingPost(post)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{post.content.substring(0, 200)}...</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function BlogEditor({
  post,
  onSave,
  onCancel,
}: {
  post: BlogPost | null
  onSave: (post: BlogPost) => void
  onCancel: () => void
}) {
  const [title, setTitle] = useState(post?.title || "")
  const [content, setContent] = useState(post?.content || "")
  const [language, setLanguage] = useState<"he" | "en">(post?.language || "he")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: post?.id || "",
      title,
      content,
      date: new Date().toISOString().split("T")[0],
      language,
    })
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{post ? "עריכת פוסט" : "פוסט חדש"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="כותרת הפוסט" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <Textarea
            placeholder="תוכן הפוסט"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            required
          />
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button
                type="button"
                variant={language === "he" ? "default" : "outline"}
                onClick={() => setLanguage("he")}
              >
                עברית
              </Button>
              <Button
                type="button"
                variant={language === "en" ? "default" : "outline"}
                onClick={() => setLanguage("en")}
              >
                English
              </Button>
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
                <Save className="w-4 h-4 mr-2" />
                שמור
              </Button>
              <Button type="button" variant="outline" onClick={onCancel}>
                <X className="w-4 h-4 mr-2" />
                ביטול
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
