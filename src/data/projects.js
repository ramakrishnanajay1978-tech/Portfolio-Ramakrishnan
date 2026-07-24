const projects = [
  {
    id: 'ticket-pricing-engine',
    title: 'Dynamic Event Ticket Pricing Engine',
    summary: 'Spring Boot application for dynamic ticket pricing using pricing rules.',
    tech: ['Spring Boot', 'MySQL', 'REST API'],
    github: '#',
    overview:
      'A backend engine that calculates event ticket prices dynamically based on configurable pricing rules such as demand, time-to-event and inventory levels, exposed through a REST API for easy integration with front-end booking systems.',
    features: [
      'Rule-based dynamic pricing engine',
      'REST API endpoints for price calculation and rule management',
      'Persistent storage of pricing rules and event data in MySQL',
      'Modular service layer for adding new pricing strategies',
    ],
    architecture:
      'Layered Spring Boot architecture with controller, service and repository layers. Pricing rules are evaluated by a dedicated pricing engine service, with MySQL used for persistence via Spring Data JPA.',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST API'],
    challenges:
      'Designing a rules structure flexible enough to support multiple pricing strategies without over-complicating the API surface.',
    improvements:
      'Add a caching layer for frequently requested prices, support for A/B testing pricing strategies, and an admin dashboard for managing rules visually.',
  },
  {
    id: 'divinepath',
    title: 'DivinePath',
    summary: 'Temple booking and spiritual journey application.',
    tech: ['Flutter', 'Node.js', 'PostgreSQL'],
    github: '#',
    overview:
      'A cross-platform mobile application that helps users discover temples, plan spiritual journeys, and book visiting slots, backed by a Node.js API and PostgreSQL database.',
    features: [
      'Temple discovery and search',
      'Slot-based booking system',
      'Spiritual journey / itinerary planning',
      'User authentication and booking history',
    ],
    architecture:
      'Flutter mobile client communicating with a Node.js REST API backend, backed by a PostgreSQL database for storing temples, bookings and user data.',
    technologies: ['Flutter', 'Dart', 'Node.js', 'Express', 'PostgreSQL'],
    challenges:
      'Handling booking slot concurrency reliably while keeping the mobile experience fast and responsive.',
    improvements:
      'Add real-time slot availability updates, push notifications for upcoming visits, and multi-language support.',
  },
]

export default projects
