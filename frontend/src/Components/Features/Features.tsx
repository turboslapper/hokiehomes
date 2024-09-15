import { ChatBubbleLeftEllipsisIcon, StarIcon, CurrencyDollarIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Honest Dorm Reviews',
    description:
    'Read real, unfiltered reviews from Hokies who’ve lived in the dorms you\'re considering. Get insights on everything from cleanliness to social atmosphere.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Ratings on What Matters Most',
    description:
      'Rate and browse dorms based on key factors: bathroom cleanliness, Wi-Fi strength, room size, safety, and more. Make informed decisions with data that matters to you.',
    icon: StarIcon,
  },
  {
    name: 'Room & Pricing Details',
    description:
      'Get full details on room sizes, pricing, and availability. Easily plan your housing budget with accurate and up-to-date dorm information.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Submit Your Own Reviews',
    description:
      'Already living in a dorm? Share your experience and help future Hokies by leaving a review. Your voice can guide others to find the perfect dorm.',
    icon: PencilSquareIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Find Your Perfect Dorm Faster
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          All the information you need to make the best decision about where to live on campus.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}