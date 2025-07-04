import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Props {
  onClick: () => void;
}

export function ButtonKirin({ onClick }: Props) {
  return (
    <Button variant="outline" size="sm" onClick={onClick}>
      <Image src="/logo-brands/kirin.svg" alt="Kirin" width={50} height={50} />
    </Button>
  )
}
