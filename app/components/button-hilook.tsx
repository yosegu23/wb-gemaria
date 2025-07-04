import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Props {
  onClick: () => void;
}

export function ButtonHilook({ onClick }: Props) {
  return (
    <Button variant="outline" size="sm" onClick={onClick}>
      <Image src="/logo-brands/hilook.svg" alt="Hilook" width={50} height={50} />
    </Button>
  )
}
