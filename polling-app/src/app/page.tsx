import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Create and Share Polls Instantly</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get real-time feedback from your audience with our easy-to-use polling platform.
          Create polls in seconds and share them with anyone, anywhere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/polls/create" 
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium"
          >
            Create a Poll
          </Link>
          <Link 
            href="/polls" 
            className="px-6 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium"
          >
            Explore Polls
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Polling Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4 flex justify-center">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Fast & Easy</h3>
            <p className="text-gray-600">Create polls in seconds with our intuitive interface. No technical skills required.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4 flex justify-center">📊</div>
            <h3 className="text-xl font-semibold mb-3">Real-time Results</h3>
            <p className="text-gray-600">Watch responses come in live as participants vote on your polls.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4 flex justify-center">🔒</div>
            <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
            <p className="text-gray-600">Control who can see and participate in your polls with advanced privacy settings.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already collecting valuable feedback through our platform.
        </p>
        <div className="flex justify-center">
          <Link 
            href="/auth/register" 
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium"
          >
            Sign Up for Free
          </Link>
        </div>
      </section>
    </div>
  );
}
    </div>
  );
}
