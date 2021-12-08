import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-full">
      <Header />

      <main>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
