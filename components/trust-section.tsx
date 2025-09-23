export function TrustSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-8">
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Trusted by businesses using industry-leading tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">QuickBooks</div>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-500">Xero</div>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">Wave</div>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">FreshBooks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
