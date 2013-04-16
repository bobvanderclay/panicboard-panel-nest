# Panic Status Board panel for Nest thermostats

![](http://takitapart.com/posts/nest-on-the-panic-status-board/nest-panel-detail.png)

[About this panel](http://takitapart.com/posts/nest-on-the-panic-status-board/).


# Instructions

I've had a few requests for more details installing this. Right now, I had only intended this as an experiment. But, since it seems so useful, I'm cleaning it up, adding a few features, and writing some additional instructions, hopeing to make it accessable to more people.

In the meantime, if you're familiar with running Node.js apps and want to play around with it as-is, once you've downloaded the application and installed the npm dependancies with:

```
npm install
```

You run the app with your nest.com username and password as parameters:

```
node app.js "Nest username" "Nest password"
```

By default, it runs on port 3000.

**WARNING**

This exposes an API to your nest device, do not run this outside your local network.
Again, this is experimental code only, use at your own risk.


## Thank you:
- <a href="http://www.panic.com/statusboard/docs/diy_tutorial.pdf">Panic's DIY Panel Tutorial PDF</a>
- <a href="https://github.com/wiredprairie/unofficial_nodejs_nest">Unofficial Nest API on Node</a>
- <a href="https://github.com/btford/angular-express-seed">Angular Express Seed.</a>

