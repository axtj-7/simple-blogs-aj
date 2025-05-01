// app/ranking/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function RankingPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [ranking, setRanking] = useState<any[]>([])
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const fetchRanking = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login') // or /signup if that’s the route
        return
      }

      const { data, error } = await supabase
        .from('blogs')
        .select('author:user_id, likes_count')
        .order('likes_count', { ascending: false })

      if (error) {
        setError('Failed to fetch ranking.')
        setLoading(false)
        return
      }

      const rankingMap: Record<string, number> = {}

      data.forEach((blog) => {
        rankingMap[blog.author] = (rankingMap[blog.author] || 0) + (blog.likes_count || 0)
      })

      const { data: users } = await supabase.from('users').select('id, username, avatar_url')

      const finalRanking = users
        ?.map((user) => ({
          id: user.id,
          username: user.username,
          avatar_url: user.avatar_url,
          total_likes: rankingMap[user.id] || 0,
        }))
        .sort((a, b) => b.total_likes - a.total_likes)

      setRanking(finalRanking)
      setLoading(false)
    }

    fetchRanking()
  }, [])

  if (loading) return <div className="text-center mt-10">Loading...</div>
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">🏆 Top Authors by Likes</h1>
      {ranking.map((user, index) => (
        <div key={user.id} className="flex items-center gap-4 mb-4">
          <span className="text-lg font-semibold">{index + 1}.</span>
          <img
            src={user.avatar_url || '/default-avatar.png'}
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div>
            <p className="font-medium">{user.username}</p>
            <p className="text-sm text-gray-500">{user.total_likes} Likes</p>
          </div>
        </div>
      ))}
    </div>
  )
}
