# Mr.Draper Shoping template

This is the robust, static html along with responsive. This HTML has been developed by using the following stuff:
- HTML5
- SCSS
- Bootstrap@4
- Javascript
- Gulp


## How to run on local

```
# Clone the repository by using the following command
git clone git@github.com:noormuhammaddev/shoping-template-mrDrapper.git

# Open index.html file in any browser
```


## SCSS setup

### Step 1 - Gulp installation
```
# Open terminal/cmd
# Check if you have gulp installed on your system
gulp -v

# if gulp already installed you will get the version of gulp

# If gulp installed then go to step 2 otherwise run the following command
npm install gulp -g
```

### Step 2 - SCSS setup
```
# Open directory (shoping-template-mrDrapper) in terminal/cmd
# Run the following command:
cd assets

# Install dependencies
npm install
```

### Step 3 - Compile SCSS
```
# To compile scss files run the following command
gulp sassCompile

# You may check the compiled default.min.css in to the following directory
appalachia -> assets -> dist -> css -> default.min.css
```


## General Information
- Poppins google fonts used by CDN.
