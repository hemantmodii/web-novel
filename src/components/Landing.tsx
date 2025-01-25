import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center bg-background text-foreground dark:bg-background dark:text-foreground">
        <h1 className="text-4xl font-bold">Welcome to Hemant&apos;s Web Novel</h1>
        <p className="mt-4 text-lg">
          A tale of mystery and adventure, updated daily. Dive into a new world!
        </p>
        <Link href="/chapter/1">
          <button className="mt-6 px-6 py-2 rounded-lg">
            Start Reading
          </button>
        </Link>
      </section>
      <hr />

      {/* Latest Chapters */}
      <section className="py-10 px-6 bg-background text-foreground dark:bg-background dark:text-foreground">
        <h2 className="text-2xl font-bold mb-6">Latest Chapters</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 bg-background hover:shadow-sm hover:bg-secondaryAccent rounded-lg dark:bg-background dark:text-foreground">
            <h3 className="text-lg font-bold">Chapter 10: The Hidden Truth</h3>
            <p className="mt-2 text-sm text-foreground dark:text-gray-300">
              The protagonist uncovers a secret that changes everything...
            </p>
            <Link href="/chapters/10">
              <button className="mt-4 px-4 py-2 rounded-lg">
                Read More
              </button>
            </Link>
          </div>
          <div className="p-4 bg-background hover:shadow-sm hover:bg-secondaryAccent rounded-lg dark:bg-background dark:text-white">
            <h3 className="text-lg font-bold">Chapter 9: A Perilous Journey</h3>
            <p className="mt-2 text-sm text-foreground dark:text-foreground">
              With danger lurking at every corner, the journey takes an unexpected turn...
            </p>
            <Link href="/chapters/9">
              <button className="mt-4 px-4 py-2 rounded-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-6 bg-background dark:bg-background dark:text-white">
        <h2 className="text-2xl font-bold mb-4">About the Story</h2>
        <p>
          This web novel follows the adventures of [Protagonist Name], a brave soul navigating a world of uncertainty and danger. With new twists daily, readers will experience a rollercoaster of emotions.
        </p>
      </section>
    </div>
  );
}
