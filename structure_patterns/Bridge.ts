interface IProvider {
	sendMessage(messsage: string): void;
	connect<T>(config: T): void;
	disconnect(): void;
}

class TelegramProvider implements IProvider {
	connect<T>(config: T): void {
		console.log(config)
	}
	disconnect(): void {
		console.log(`Disconnected TG`)
	}
	sendMessage(messsage: string): void {
		console.log(messsage)
	}
}

class WhatAppPRovider implements IProvider {
	connect<T>(config: T): void {
		console.log(config)
	}
	disconnect(): void {
		console.log(`Disconnected WA`)
	}
	sendMessage(messsage: string): void {
		console.log(messsage)
	}
}

class NotificationSender {
	constructor (private provider: IProvider) {}

	send() {
		this.provider.connect('connect')
		this.provider.sendMessage('message')
		this.provider.disconnect()
	}
}

class DelayNotificationSender extends NotificationSender {
	constructor(provider: IProvider) {
		super(provider)
	}

	sendDeployed() {}
}

const sender = new NotificationSender(new TelegramProvider())
sender.send();

const sender2 = new NotificationSender(new WhatAppPRovider())
sender2.send();