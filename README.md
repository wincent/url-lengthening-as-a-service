# url-lengthening-as-a-service

> I guess we can blame Twitter for the popularity of URL shorteners. I'm sick of them.
>
> Thinking of making http://url-lengthening-as-a-service.com

([Source: Twitter](https://twitter.com/wincent/status/745829046030901249))

## Installation and set-up

```
git clone https://github.com/wincent/url-lengthening-as-a-service
cd url-lengthening-as-a-service
npm install
node index.js
```

This runs url-lengthening-as-a-service on http://localhost:3000

### Optional set-up

Register a domain name like url-lengthening-as-a-service.com and point it at your server. (Note: I was too lazy to do this, and also didn't want to host an open redirect on the internet.)

## Usage

Supposing you're running the url-lengthening-as-a-service on http://localhost:3000, you can visit http://localhost:3000/given-a-possibly-shortened-url-show-a-lengthened-form-of-it/THE_URL and you will be given a lengthened form of `THE_URL`.

Say you want to unshorten a URL like: https://t.co/iIJaKC3r8p

You would visit http://localhost:3000/given-a-possibly-shortened-url-show-a-lengthened-form-of-it/https://t.co/iIJaKC3r8p and be given a lengthened version that looks like this:

http://localhost:3000/redirect-to/https://www.youtube.com/watch?v=oPSuvaYmXBY

Upon visiting that URL you'll be redirected to the destination that was hiding behind https://t.co/iIJaKC3r8p; that is: https://www.youtube.com/watch?v=oPSuvaYmXBY

Note that the lengthened URL has the desirable property that it reveals the actual destination you'll be going to before you get there.

## Related services (coming soon)

* deleting-your-entire-node-modules-folder-and-running-npm-install-from-scratch-because-it-is-the-only-way-you-know-how-to-upgrade-as-a-service.com
* force-installing-the-one-true-editor-as-a-service.com
* its-like-airbnb-for-startups-as-a-service.com
