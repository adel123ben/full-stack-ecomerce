import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailInput() {
  return (
    <div className="flex max-w-sm w-full items-center justify-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}
