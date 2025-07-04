"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  { value: "CCTV", label: "CCTV" },
  { value: "DVR", label: "DVR" },
  { value: "Air Fryer", label: "Air Fryer" },
  { value: "Beauty Blender", label: "Beauty Blender" },
  { value: "Chopper", label: "Chopper" },
  { value: "Coffee Maker", label: "Coffee Maker" },
  { value: "Fan", label: "Fan" },
  { value: "Hair Dryer", label: "Hair Dryer" },
  { value: "Kettle", label: "Kettle" },
  { value: "Kompor Gas", label: "Kompor Gas" },
  { value: "Mixer", label: "Mixer" },
  { value: "Oven", label: "Oven" },
  { value: "Rice Cooker", label: "Rice Cooker" },
  { value: "Sandwich Maker", label: "Sandwich Maker" },
  { value: "Setrika", label: "Setrika" },
  { value: "Toaster", label: "Toaster" },
  { value: "Vacuum Cleaner", label: "Vacuum Cleaner" },
];

interface ComboboxCategoriesProps {
    onCategorySelect: (value: string | null) => void;
}

export function ComboboxCategories({ onCategorySelect }: ComboboxCategoriesProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    setOpen(false);
    onCategorySelect(newValue || null);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value || "Pilih Kategori"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Cari kategori..." className="h-9" />
          <CommandList>
            <CommandEmpty>Tidak ditemukan.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={() => handleSelect(framework.value)}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
