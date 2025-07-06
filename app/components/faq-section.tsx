import { Feature197 } from "@/components/accordion-feature-section";

const demoData = {
  features: [
    {
      id: 1,
      title: "1. Apakah produk di Gemaria Elektronik bergaransi resmi?",
      image: "/images/faq-image.png",
      description:
        "Ya, semua produk yang kami jual adalah 100% original dan dilengkapi dengan garansi resmi pabrik sesuai dengan merek masing-masing.",
    },
    {
      id: 2,
      title: "2. Apakah tersedia layanan pemasangan untuk AC dan CCTV?",
      image: "/images/faq-image.png",
      description:
        "Tersedia! Kami menyediakan layanan instalasi profesional oleh teknisi berpengalaman untuk AC, CCTV, dan produk lain yang memerlukan pemasangan.",
    },
    {
      id: 3,
      title: "3. Berapa lama proses pengiriman produk?",
      image: "/images/faq-image.png",
      description:
        "Pengiriman dilakukan 1–2 hari kerja untuk area terjangkau, dan maksimal 5 hari kerja untuk area luar jangkauan, tergantung lokasi Anda.",
    },
    {
      id: 4,
      title: "4. Apakah bisa membeli produk secara kredit atau cicilan?",
      image: "/images/faq-image.png",
      description:
        "Bisa! Kami mendukung pembayaran melalui cicilan menggunakan kartu kredit dan beberapa layanan paylater tertentu (syarat & ketentuan berlaku).",
    },
    {
      id: 5,
      title: "5. Bagaimana cara menghubungi layanan pelanggan Gemaria Elektronik?",
      image: "/images/faq-image.png",
      description:
        "Anda bisa menghubungi kami melalui WhatsApp, telepon, atau media sosial. Tim kami siap membantu setiap hari kerja dengan respon cepat.",
    },
  ],
};

function Feature197Demo() {
  return <Feature197 {...demoData} />;
}

export { Feature197Demo };