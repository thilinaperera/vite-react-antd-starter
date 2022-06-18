# 🚀 Vite + React + Ant Design + TypeScript starter

Note: rc config file support is included.
To use rc config file, rename .servicerc.example to .servicerc. All root variables
should contain "env_" prefix.

```JSON
{
  "env_name": "Example Environment",
  "env_description": "This is an example environment",
  "env_version": "1.0",
  "env_variables": {
    "example_variable": "example_value"
  }
}
```

## Installation

First, if you want to ensure you're using the correct Node.js and package manager versions, [install Volta](http://volta.sh)

```sh
# install Volta (macos/unix only)
curl https://get.volta.sh | bash

# For Windows, download and run the Windows installer and follow the instructions.

# install Node
volta install node
```
### Install Dependencies

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
