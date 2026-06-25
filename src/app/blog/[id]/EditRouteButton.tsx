"use client"

import { Button } from "@/components/ui/button"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import Link from "next/link"

const EditRouteButton = ({id}: {id: number}) => {

    const { isAuthenticated } = useKindeBrowserClient()

  return isAuthenticated ? (
    <Link href={`/blog/${id}/edit`}>
      <Button variant="link" className="text-gray-400 font-content tracking-wide text-base">
        Edit this resource
      </Button>
    </Link>
  ) : (<></>)
}

export default EditRouteButton;
