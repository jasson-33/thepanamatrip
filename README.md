# ThePanamaTrip App

A Next.js tourism website showcasing Panama travel experiences with rich animations and immersive content.

## Development Setup

This project uses **Nix** and **direnv** to provide a reproducible development environment with **Bun** as the package manager.

### Prerequisites

- [Nix](https://nixos.org/download.html) - Package manager
- [direnv](https://direnv.net/) - Environment switcher
- [nix-direnv](https://github.com/nix-community/nix-direnv) - Nix integration for direnv

### Installation

1. **Install Nix** (if not already installed):
   ```bash
   curl -L https://nixos.org/nix/install | sh
   ```

2. **Install direnv**:
   ```bash
   brew install direnv  # macOS
   ```

3. **Install nix-direnv**:
   ```bash
   nix-env -iA nixpkgs.nix-direnv
   direnv hook zsh >> ~/.zshrc  # or bash for bash
   ```

4. **Setup the project**:
   ```bash
   cd thepanamatrip
   direnv allow
   ```

   This will automatically:
   - Load the Nix shell environment with Bun and Node.js 20
   - Set up environment variables from `.env`
   - Configure the development environment

5. **Install dependencies**:
   ```bash
   bun install
   ```

6. **Configure environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

## Available Scripts

```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint
bun run lint:fix     # Fix ESLint issues
bun run lint:all     # Lint and format all files
bun run prettier     # Format all files
```

## Project Structure

- `src/components/` - React components
- `src/pages/` - Next.js pages and API routes
- `src/context/` - React Context providers
- `src/styles/` - Global CSS and custom fonts
- `flake.nix` - Nix development environment definition
- `.envrc` - Direnv configuration

## Tech Stack

- **Framework**: Next.js 13.2.4 (Pages router)
- **Runtime**: Bun 1.4.2
- **Node**: 22.23.2 (via Nix)
- **Animations**: GSAP, AOS, Atropos
- **Styling**: CSS Modules, custom fonts (Bigola, Gotham)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Nix Documentation](https://nixos.org/learn.html)
- [direnv Documentation](https://direnv.net/)
