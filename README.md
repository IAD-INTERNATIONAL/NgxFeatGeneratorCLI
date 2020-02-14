# :rocket: NgxFeatGeneratorCLI

![Node.js CI](https://github.com/IAD-INTERNATIONAL/NgxFeatGeneratorCLI/workflows/Node.js%20CI/badge.svg?branch=master)

> CLI for generating Angular feature from a json config input file.

NgxFeatGeneratorCLI is a simple CLI for generating Angular feature directory, inside an existing Angular application. Under the hood it uses the angular schematics to generate components, services, guard etc.

![Alt Text](./images/tty.gif)

## Prerequisites
First, you should install the Angular CLI globally.

```sh
npm i -g @angular/cli
```

## Installation
```sh
npm i -g ngx-feat-generator-cli
```

## Usage
To display CLI help use the following command :
```sh
ngx-feat-generator --help


Usage: ngx-feat-generator [options]

Ngx CLI for generating Angular feature directory from a json config input file

Options:
  -V, --version             output the version number
  -f, --file-config <type>  JSON input config file
  -h, --help                output usage information
```

## Generating a new Angular feature directory

You must create a json input file, in order to orchestrate the CLI. The json describes your desired files tree.

Below an example json config file : 

```javascript
{
  "feature": "broadcast",
  "projectPath": "test/fake-ng-project",
  "featurePath": "src/app/broadcast",
  "tree": [
    {
      "type": "module",
      "name": "broadcast",
      "opts": "--routing=true"
    },
    {
      "type": "component",
      "name": "broadcast/components/real-estate-card",
      "opts": "--changeDetection=OnPush --module=broadcast/broadcast.module.ts",
      "extra": {
        "isolatedTest": true
      }
    },
    {
      "type": "component",
      "name": "broadcast/components/broadcast-information-dialog",
      "opts": "--changeDetection=OnPush --module=broadcast/broadcast.module.ts",
      "extra": {
        "isolatedTest": true
      }
    },
    {
      "type": "guard",
      "name": "broadcast/shared/guard/elysium-guard",
      "opts": "--implements=CanActivate",
      "extra": {
        "isolatedTest": true
      }
    },
    {
      "type": "interface",
      "name": "broadcast/shared/models/broadcast"
    },
    {
      "type": "interface",
      "name": "broadcast/shared/models/shopping-cart"
    },
    {
      "type": "interface",
      "name": "broadcast/shared/models/cart-item"
    },
    {
      "type": "enum",
      "name": "broadcast/shared/models/cart-item-type"
    },
    {
      "type": "service",
      "name": "broadcast/shared/services/broadcast",
      "extra": {
        "isolatedTest": true
      }
    },
    {
      "type": "service",
      "name": "broadcast/shared/services/pack",
      "extra": {
        "isolatedTest": true
      }
    }
  ]
}

```

You 'll find below the json fields description :

| Field   |      Type      |  Description |
|----------|:-------------:|------:|
| feature |  `string` | The name of the feature to generate |
| projectPath | `string` | The location of the existing Angular project |
| featurePath | `string` | The path of the feature inside the existing Angular project |
| tree | `TreeItem[]` | TreeItem Array which describes the tree files of the desired feature

Below the description of the `TreeItem` object :

| Field   |      Type      |  Description |
|----------|:-------------:|------:|
| type |  `string` | Angular CLI schematic type : 'component', 'module',  'interface', 'guard', 'enum', 'service'. A special type has been added for our needs : 'spec'. It allows us to update the default Angular test to make isolated-test.|
| name |  `string` | the path of the generated item. |
| opts? |  `string` | Angular CLI options. ex: --changeDetection=OnPush --module=broadcast/broadcast.module.ts |
| extra? |  `ExtraConfig` | Extra config for our needs for isolated test generation |

Finally, run the generation command :

```sh
ngx-feat-generator --file-config ./test/broadcast.json
```

# Contributing

If you want to contribute, you could setup the project in your local machine, with a standard git clone :

```sh
git clone git@github.com:IAD-INTERNATIONAL/NgxFeatGeneratorCLI.git
```

Next you must generate the fake ng project in `./test/fake-ng-project`: 

```sh
npm run setup:fake-project
```

To run the integration test :

```sh
npm run test:integration
```

To run the Jest test :

```sh
npm test

or

npm run test:watch
```

# License

[ISC](LICENSE)