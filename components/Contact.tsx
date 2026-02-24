export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-light mb-4 text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8" />
        <p className="text-gray-300 mb-10 text-lg">
          หากคุณมีโปรเจกต์ที่น่าสนใจ สามารถติดต่อผมได้
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block text-xl text-white hover:text-cyan-400 transition border-b-2 border-white hover:border-cyan-400 pb-1"
        >
          your@email.com
        </a>
      </div>
    </section>
  );
}
