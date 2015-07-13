1. Create Database diagram
```

rake erd

```
  
2. Fully reset DB and redo all migrations
```

rake db:migrate:reset

```

3. git return file state to previous commit
```

git reset --hard

```

4. Rebuild Secrets.yml

	4.1 Create secrets.yml on config folder with the following 
		```
		development:
			secret_key_base: xxx
		test:
			secret_key_base: xxx
		production:
			secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>
		```
	4.2 Use rake secret for new keys

5. Bundler commands
```

http://bundler.io/v1.5/commands.html
```

6. Testing json response
```
http://localhost:3000/api/v1/genres.json // for all of them
http://localhost:3000/api/v1/genres/1.json // for individual response
```

7. CLear Cache
```
	rake tmp:clear

```

9. fix public SSH key issue
```

ssh-add -l (The agent has no identities message will shown up)
ssh-add "Key"
ssh-add -l (to verify agent)
```

10. Update Ember-CLI
```

npm uninstall -g ember-cli
npm cache clean
bower cache clean
npm install -g ember-cli
rm -rf node_modules bower_components dist tmp
npm install --save-dev ember-cli
add "ember-simple-auth": "0.8.0" to bower.json
bower install
ember install ember-cli-simple-auth
ember init -- Generate new project blueprint... Make sure to review diff!
rake start and install any mising add-on	
```

