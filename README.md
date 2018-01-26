This is my personal website.

To use docker :

```docker pull nikohelie/resume```
```docker build -t nikohelie/resume .```
```docker run -d -p 3000:4000 nikohelie/resume```

To push on heroku :

```heroku container:login```
```heroku container:push web```

Automated deployement on Heroku when pushed on master.
