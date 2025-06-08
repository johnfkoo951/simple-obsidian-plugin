# Simple Obsidian Plugin

A straightforward plugin for Obsidian that enhances your note-taking experience with simple yet powerful features.

## Description

Simple Obsidian Plugin is designed to provide essential functionality without overwhelming complexity. This plugin integrates seamlessly into your Obsidian workflow, offering intuitive features that help you manage and organize your notes more effectively.

## Installation

### From Obsidian Community Plugins

1. Open Obsidian Settings
2. Navigate to Community Plugins and disable Safe Mode
3. Click Browse and search for "Simple Obsidian Plugin"
4. Click Install, then Enable

### Manual Installation

1. Download the latest release from the GitHub releases page
2. Extract the files and copy `main.js`, `manifest.json`, and `styles.css` to your vault's plugins folder: `VaultFolder/.obsidian/plugins/simple-obsidian-plugin/`
3. Reload Obsidian
4. Enable the plugin in Settings > Community Plugins

## Features

- **Quick Commands**: Access frequently used functions with customizable hotkeys
- **Note Templates**: Create and manage reusable note templates
- **Auto-formatting**: Automatically format your notes according to predefined rules
- **Custom Shortcuts**: Define your own keyboard shortcuts for common actions
- **Metadata Management**: Easy manipulation of frontmatter and note properties
- **Search Enhancement**: Advanced search capabilities within your vault

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/simple-obsidian-plugin.git
   cd simple-obsidian-plugin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the plugin:
   ```bash
   npm run build
   ```

4. For development with hot reload:
   ```bash
   npm run dev
   ```

### Building for Release

```bash
npm run build
```

This will create the necessary files (`main.js`, `manifest.json`, `styles.css`) in the project root.

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.