MongoDB Repository for iReceptor
================================

This iReceptor repository is a dockerized instance of MongoDB based
upon the [official mongo docker
image](https://hub.docker.com/_/mongo/) with additional customizations
specific to iReceptor.

## Deployments

It is expected that repository-mongodb will be deployed	as one
component of an iReceptor data node.

## Configuration Procedure

Refer to the [official mongo docker
image](https://hub.docker.com/_/mongo/) about additional
configurations settings.

**Host configuration**

[Docker](https://www.docker.com) needs to be installed either directly on the host machine or within a VM.

**Configuring repository-mongodb**

Copy the dbsetup.defaults to dbsetup.js and edit accordingly,to provide customization of the Mongo instance, namely:

```
cd repository-mongodb
cp dbsetup.defaults dbsetup.js
emacs dbsetup.js
```

Make sure NOT to accidently commit the dbsetup file with usernames and passwords into the 
git repository (note: we put dbsetup.js into the .gitignore of the repo as a failsafe!)