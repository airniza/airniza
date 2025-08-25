"use client"
import { useEffect, useState } from "react"

export function LiveUpdatedText({ initialTime }: { initialTime: string }) {
  const [lastUpdated] = useState<Date>(new Date(initialTime))
  const [timeAgo, setTimeAgo] = useState("just now")

  useEffect(() => {
    const updateTimeAgo = () => {
      const now = new Date()
      const diff = Math.floor((now.getTime() - lastUpdated.getTime()) / 1000)

      if (diff < 60) {
        setTimeAgo("just now")
      } else {
        const mins = Math.floor(diff / 60)
        setTimeAgo(`${mins} min${mins > 1 ? "s" : ""} ago`)
      }
    }

    updateTimeAgo()
    const interval = setInterval(updateTimeAgo, 30000)
    return () => clearInterval(interval)
  }, [lastUpdated])

  return (
    <p className="text-sm">
       <span className="font-bold">Last updated:</span> <span className="text-muted-foreground">{timeAgo}</span>
    </p>
  )
}