# eOriginal - ui-frontend-templates


## Contents

1. [Repository overview](#overview)
    * [Bootstrap core assets](#bootstrap)
    * [Code customizations](#customization)
1. [Development process](#dev)
1. [Future Bootstrap upgrades](#upgrade)

<a name="overview"></a>
## Overview


### Pure boilerplate
* Build folder (`/build`)
* nuget (`/nuget`)
* Javascript folder (`/js`)
    * excludes `js/coverage`, which is added as part of the build process and can be blown away without consequence
    * ***NOTE:*** *subject to change as custom jQuery moves from templates to separate files*
* SCSS folders/files not otherwise mentioned (`/scss/*`)
* All files in root not otherwise mentioned

### New
* HTML templates (`/templates/*`)
* Images (`/img/*`)
* Certain SCSS files:
    1. Custom variables and variable overrides (`/scss/_variable-overrides.scss`)
    1. SVG icon handling (`/scss/_icons.scss`)
    1. Lender logos (`/scss/_lender-logos.scss`)
    1. All other custom styles (`/scss/_customizations.scss`)
* This documentation file (`README.md`)
    * replaces original README, moved to the [docs folder](site/docs)

### Hybrid
* dynamically built dist folder (`/dist/*`)
* `package.json`
* `.gitignore`
* Main SCSS file  (`/scss/bootstrap.scss`) with imports of new partials
    * ***NOTE:*** The precise placement of those new partials in that file is critical. In particular, the variable overrides will not work if imported after the default `variables` file.
* SCSS linter (`.stylelintrc`)
* Docs folder (`/site/docs`)
    * ***NOTE:*** *The sites folder is unrelated to the site itself and may be removed from the final code base.*


<a name="bootstrap"></a>
### Bootstrap
* **Current version: v4.2.1**
* Source: https://github.com/twbs/bootstrap/releases
* Bootstrap docs README can be found [here](site/docs/README.md)


<a name="customization"></a>
### Customizations


<a name="dev"></a>
## Development Process

### Getting Started
***NOTE:*** *assumes use of Mac OSx* 
1. Clone this repository using Git
1. Navigate to root folder of code base in your terminal
1. *Optional:* run `bundle install` to build Ruby-based assets used for local documentation
1. Run `npm install` to compile dependencies to `/node_modules` folder

More info [here](https://getbootstrap.com/docs/4.2/getting-started/build-tools/#tooling-setup).


### Usage
1. run `npm run watch` from the project root folder in your terminal.
1. Any changes within the `/scss`, `/js`, or `/img` folders will cause assets to rebuild to the `/dist` folder
1. Adding images
    1. Place the image into the `/img` folder
    1. The build process currently supports auto-compiling into the `/dist/img` folder for `.svg`, `.jpg`, and `.png` file types.
    1. When adding a new svg icon, link it to a css class by replicating other lines in `/scss/_icons.scss`
1. Adding custom styles
    1. Place custom SCSS code within the `/scss/_customizations.scss` file
    1. New variables or overrides to existing ones go in the `/scss/_variable-overrides.scss` file
1. ***SUBJECT TO CHANGE:*** All custom jQuery scripts are currently placed within script tags embedded into the corresponding template.


### Dependencies
* A date picker tool has been selected for use on select pages. Tempus Dominus can be used on a page-by-page basis by including the required CSS and JavaScript https://tempusdominus.github.io/bootstrap-4/


<a name="upgrade"></a>
## Upgrading Bootstrap
1. Download and unzip the version of your choice from https://github.com/twbs/bootstrap/releases.
1. Update assets
    1. Update JavaScript assets
        * Replace the contents of the current code's `/js` folder with the new version
        * ***SUBJECT TO CHANGE***: currently no need to save any contents of existing folder
    1. Update CSS assets
        * rename current `/scss` folder to sonmething else
        * Copy the `/scss` folder from the new Bootstrap version into the current code base
        * Copy custom SCSS partial files from renamed current folder to the new one
        * Add imports for those copied custom files in the new `/scss/bootstrap.scss` file, in the order matching that of the current version.
    1. Run `npm run dist` from the terminal to dynamically update the `/dist` folder.
