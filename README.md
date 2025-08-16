# LikeCard

A modern Next.js application with AI integration using Google's Genkit framework.

## 🚀 Features

- **Next.js 15** - Latest version with App Router
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Modern UI Components** - Pre-built shadcn/ui components

## 📦 Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Deployment**: Vercel

## 🚦 Getting Started

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:9002](http://localhost:9002).

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## 📁 Project Structure

```
src/
├── app/               # Next.js App Router
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/        # React components
│   ├── like-card.tsx  # Main LikeCard component
│   └── ui/           # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── ...
```

## 🎨 UI Components

This project includes a comprehensive set of pre-built UI components from shadcn/ui:

- Accordion, Alert Dialog, Avatar, Badge, Button
- Calendar, Card, Carousel, Chart, Checkbox
- Dialog, Dropdown Menu, Form, Input, Label
- Menubar, Popover, Progress, Radio Group
- Select, Separator, Sheet, Sidebar, Skeleton
- Slider, Switch, Table, Tabs, Textarea
- Toast, Tooltip, and more...

## 📚 Available Scripts

- `npm run dev` - Start development server (port 9002)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit development server
- `npm run genkit:watch` - Start Genkit with watch mode

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. **Connect your GitHub repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically detect this as a Next.js project

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Jeswanth-009/LikeCard)

## 🔧 Configuration

- **Next.js Config**: `next.config.ts`
- **Tailwind Config**: `tailwind.config.ts`
- **TypeScript Config**: `tsconfig.json`
- **Components Config**: `components.json`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Jeswanth** - [@Jeswanth-009](https://github.com/Jeswanth-009)

---

Built with ❤️ using Next.js and modern web technologies.
