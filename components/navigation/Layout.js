import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <div className="max-w-7xl mx-auto pb-12 px-0 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
