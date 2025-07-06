import { TestimonialsSection } from "@/components/testimonials-with-marquee"



const testimonials = [
  {
    author: {
      name: "Rizky Hidayat",
      handle: "@rizky_h",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    text: "Beli kulkas di Gemaria Shop, datangnya cepat dan kondisi mulus banget. Harganya juga bersaing. Recommended banget!",
    href: "#"
  },
  {
    author: {
      name: "Ayu Lestari",
      handle: "@ayules",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    text: "Saya beli mesin cuci di Gemaria dan langsung jatuh hati. Proses transaksi gampang dan stafnya responsif.",
    href: "#"
  },
  {
    author: {
      name: "Dimas Pratama",
      handle: "@dimprat",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg"
    },
    text: "Pelayanan cepat, TV LED 43 inch sampai dengan aman dan packingnya rapi. Kualitas barang sesuai deskripsi!",
    href: "#"
  },
  {
    author: {
      name: "Lina Marlina",
      handle: "@linamarlin",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    text: "Gemaria Shop selalu jadi andalan keluarga kami beli elektronik. Sudah 3x order dan selalu puas.",
    href: "#"
  },
  {
    author: {
      name: "Fajar Nugraha",
      handle: "@fajarnu",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    text: "Beli AC hemat energi di sini, pelayanannya ramah dan pengiriman kilat. Terbaik sih!",
    href: "#"
  },
  {
    author: {
      name: "Nadya Fitriani",
      handle: "@nadyaftr",
      avatar: "https://randomuser.me/api/portraits/women/61.jpg"
    },
    text: "Gemaria bener-bener ngerti kebutuhan rumah tangga. Blender yang saya beli awet dan berkualitas.",
    href: "#"
  },
  {
    author: {
      name: "Yusuf Maulana",
      handle: "@yusufmln",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    text: "Proses pemesanan simpel, customer service sabar banget bantuin saya pilih sound system yang pas.",
    href: "#"
  },
  {
    author: {
      name: "Tari Andini",
      handle: "@tariandn",
      avatar: "https://randomuser.me/api/portraits/women/39.jpg"
    },
    text: "Beli microwave dan sangat puas. Barang original, garansi resmi, dan pengiriman super cepat.",
    href: "#"
  },
  {
    author: {
      name: "Arif Setiawan",
      handle: "@arifset",
      avatar: "https://randomuser.me/api/portraits/men/59.jpg"
    },
    text: "Gemaria Shop selalu update produk terbaru. Beli smart TV kemarin langsung dikirim hari itu juga!",
    href: "#"
  },
  {
    author: {
      name: "Melani Putri",
      handle: "@melaniputri",
      avatar: "https://randomuser.me/api/portraits/women/77.jpg"
    },
    text: "Suka banget sama pelayanan after sales-nya. Gemaria bantu saya klaim garansi tanpa ribet.",
    href: "#"
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Apa Kata Pelanggan Kami"
      description="Testimoni langsung dari pelanggan setia kami yang puas dengan kualitas produk dan pelayanan dari Gemaria Elektronik."
      testimonials={testimonials}
    />
  )
}