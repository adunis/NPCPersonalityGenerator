const reactions = {
    "Aloof": {
      "greeting": ["Oh, it’s you. What do you want?"],
      "threatened": ["You really think that’ll scare me?"],
      "receivingGift": ["Thanks, I guess."],
      "hearingGoodNews": ["Good news, whatever."],
      "hearingBadNews": ["Figures. What now?"],
      "beingAskedForHelp": ["Maybe. What’s in it for me?"],
      "witnessingInjustice": ["Injustice? Not my problem."],
      "ethics": {
        "stealing": ["Stealing? Do what you want, doesn't concern me."],
        "lying": ["Lying? Everyone does it."],
        "killing": ["Killing in self-defense? If you must."],
        "charity": ["Charity? Not my thing."],
        "authority": ["Authority? I don't care either way."],
        "slavery": ["Slavery? Not my problem as long as it doesn't affect me."],
        "magic": ["Magic? Just another tool."],
        "monstrousRaces": ["Monstrous races? They're all the same to me."]
      }
    },
    "Anxious": {
      "greeting": ["H-hi. How can I help you?"],
      "threatened": ["P-please don’t hurt me!"],
      "receivingGift": ["Th-thank you. You’re very kind."],
      "hearingGoodNews": ["Oh, that’s great news!"],
      "hearingBadNews": ["Oh no, that’s terrible. What can we do?"],
      "beingAskedForHelp": ["I-I’ll try my best to help."],
      "witnessingInjustice": ["This is wrong, but I’m afraid to act."],
      "ethics": {
        "stealing": ["Stealing? That's w-wrong, isn't it?"],
        "lying": ["Lying makes me uncomfortable."],
        "killing": ["Killing in self-defense? I hope it never comes to that."],
        "charity": ["Charity? I wish I could help more."],
        "authority": ["Authority should be respected, I think."],
        "slavery": ["Slavery? It's terrible, but what can I do?"],
        "magic": ["Magic? It scares me a bit."],
        "monstrousRaces": ["Monstrous races? I'm afraid of them."]
      }
    },
    "Boastful": {
      "greeting": ["Greetings! You’re in the presence of greatness."],
      "threatened": ["You dare threaten me? Foolish!"],
      "receivingGift": ["Ah, a tribute to my magnificence!"],
      "hearingGoodNews": ["Of course, I expected as much."],
      "hearingBadNews": ["No matter, I can handle this."],
      "beingAskedForHelp": ["I’ll help, and you’ll owe me for it."],
      "witnessingInjustice": ["I shall right this wrong with ease!"],
      "ethics": {
        "stealing": ["Stealing? Only if it's from the unworthy."],
        "lying": ["Lying? I'm too great to need lies."],
        "killing": ["Killing in self-defense? A necessary action for the strong."],
        "charity": ["Charity? My presence is charity enough."],
        "authority": ["Authority? I am the authority."],
        "slavery": ["Slavery? Only for those lesser than me."],
        "magic": ["Magic? A tool for the powerful, like me."],
        "monstrousRaces": ["Monstrous races? They should bow to my greatness."]
      }
    },
    "Calm": {
      "greeting": ["Hello. How can I assist you?"],
      "threatened": ["Let’s not resort to violence."],
      "receivingGift": ["Thank you, this is very kind."],
      "hearingGoodNews": ["That’s good to hear."],
      "hearingBadNews": ["We’ll handle this calmly."],
      "beingAskedForHelp": ["I’ll help you. Let’s stay composed."],
      "witnessingInjustice": ["Injustice must be dealt with, calmly and surely."],
      "ethics": {
        "stealing": ["Stealing? It disturbs the peace."],
        "lying": ["Lying disrupts trust, better avoided."],
        "killing": ["Killing in self-defense? Sometimes it's necessary, but regrettable."],
        "charity": ["Charity brings balance to society."],
        "authority": ["Authority should be respected, within reason."],
        "slavery": ["Slavery? It’s fundamentally wrong."],
        "magic": ["Magic? A natural part of the world."],
        "monstrousRaces": ["Monstrous races? They deserve a chance like anyone else."]
      }
    },
    "Chipper": {
      "greeting": ["Hi there! How can I help?"],
      "threatened": ["Whoa, easy there! No need for that."],
      "receivingGift": ["Thanks a bunch! This is great!"],
      "hearingGoodNews": ["Awesome news! I’m so happy!"],
      "hearingBadNews": ["Oh no, that’s terrible! We’ll fix it!"],
      "beingAskedForHelp": ["Sure thing! Let’s get to work!"],
      "witnessingInjustice": ["We can’t let this stand! Let’s fix it!"],
      "ethics": {
        "stealing": ["Stealing? That's not nice at all!"],
        "lying": ["Lying? Better to be honest and kind."],
        "killing": ["Killing in self-defense? If it's the only way..."],
        "charity": ["Charity? Let's help as much as we can!"],
        "authority": ["Authority? It’s important to respect it."],
        "slavery": ["Slavery? Absolutely wrong, we must stop it!"],
        "magic": ["Magic? It’s so fascinating!"],
        "monstrousRaces": ["Monstrous races? They can be friendly too!"]
      }
    },
    "Conflicted": {
      "greeting": ["Hello. Um, what do you need?"],
      "threatened": ["I don’t want to fight, but I will if I must."],
      "receivingGift": ["Thank you. I think."],
      "hearingGoodNews": ["Good news, but I’m cautious."],
      "hearingBadNews": ["This is bad. What do we do?"],
      "beingAskedForHelp": ["I want to help, but I’m unsure how."],
      "witnessingInjustice": ["Injustice is bad, but I’m not sure what to do."],
      "ethics": {
        "stealing": ["Stealing? It's wrong, but sometimes necessary."],
        "lying": ["Lying? It's complicated..."],
        "killing": ["Killing in self-defense? It's a tough call."],
        "charity": ["Charity? Good, but can be tricky."],
        "authority": ["Authority? Depends on who’s in charge."],
        "slavery": ["Slavery? It’s abhorrent, but what can I do?"],
        "magic": ["Magic? It has its pros and cons."],
        "monstrousRaces": ["Monstrous races? They deserve a chance, but can be dangerous."]
      }
    },
    "Courteous": {
      "greeting": ["Greetings, how may I serve you?"],
      "threatened": ["Let’s discuss this like civilized people."],
      "receivingGift": ["Thank you kindly. I appreciate it."],
      "hearingGoodNews": ["Splendid news! Well done."],
      "hearingBadNews": ["That’s unfortunate. How can I help?"],
      "beingAskedForHelp": ["I would be honored to assist you."],
      "witnessingInjustice": ["This is a grave injustice. We must act."],
      "ethics": {
        "stealing": ["Stealing? It’s uncivilized and wrong."],
        "lying": ["Lying? It’s dishonest and dishonorable."],
        "killing": ["Killing in self-defense? Sometimes necessary, but unfortunate."],
        "charity": ["Charity? A noble act."],
        "authority": ["Authority should be respected and upheld."],
        "slavery": ["Slavery? It’s a terrible injustice."],
        "magic": ["Magic? It’s a tool that can be used for good or ill."],
        "monstrousRaces": ["Monstrous races? They should be treated with fairness and dignity."]
      }
    },
    "Curious": {
      "greeting": ["Hello! What brings you here?"],
      "threatened": ["Why threaten when we can talk?"],
      "receivingGift": ["A gift? How intriguing. Thank you."],
      "hearingGoodNews": ["Fascinating! Tell me more!"],
      "hearingBadNews": ["This is troubling. We need more information."],
      "beingAskedForHelp": ["I’d love to help! What can I do?"],
      "witnessingInjustice": ["We must investigate this injustice!"],
      "ethics": {
        "stealing": ["Stealing? Why do people do it?"],
        "lying": ["Lying? What’s the reason behind it?"],
        "killing": ["Killing in self-defense? What leads to such a situation?"],
        "charity": ["Charity? How does it impact society?"],
        "authority": ["Authority? What makes it legitimate?"],
        "slavery": ["Slavery? How did it come to be accepted?"],
        "magic": ["Magic? How does it work and affect people?"],
        "monstrousRaces": ["Monstrous races? What are their cultures like?"]
      }
    },
    "Deceptive": {
      "greeting": ["Welcome! What can I do for you?"],
      "threatened": ["Threats? Really? Try me."],
      "receivingGift": ["Thank you. I’ll put this to good use."],
      "hearingGoodNews": ["Wonderful news! Very advantageous."],
      "hearingBadNews": ["Bad news, eh? Interesting."],
      "beingAskedForHelp": ["I’ll help, for a price."],
      "witnessingInjustice": ["Injustice? Let’s see how I can benefit."],
      "ethics": {
        "stealing": ["Stealing? If you can get away with it, why not?"],
        "lying": ["Lying? A useful tool to get what you want."],
        "killing": ["Killing in self-defense? Do what you must."],
        "charity": ["Charity? Only if it benefits me."],
        "authority": ["Authority? Respect it when it suits you."],
        "slavery": ["Slavery? Another means to an end."],
        "magic": ["Magic? A powerful tool, if used wisely."],
        "monstrousRaces": ["Monstrous races? Potential allies or threats, depending on my needs."]
      }
    },
    "Detached": {
      "greeting": ["Hello. What do you need?"],
      "threatened": ["Threaten all you want. I don’t care."],
      "receivingGift": ["Thanks, I suppose."],
      "hearingGoodNews": ["Good news. Noted."],
      "hearingBadNews": ["Bad news. Understood."],
      "beingAskedForHelp": ["If I must help, I will."],
      "witnessingInjustice": ["Injustice happens. It’s just the way of things."],
      "ethics": {
        "stealing": ["Stealing? It’s not my concern."],
        "lying": ["Lying? Everyone does it at some point."],
        "killing": ["Killing in self-defense? Necessary sometimes."],
        "charity": ["Charity? If it makes you feel better."],
        "authority": ["Authority? Doesn’t matter much to me."],
        "slavery": ["Slavery? It's a fact of life."],
        "magic": ["Magic? Just another aspect of existence."],
        "monstrousRaces": ["Monstrous races? They are what they are."]
      }
    },
    "Determined": {
      "greeting": ["Hello! What’s the mission?"],
      "threatened": ["Threaten me? I think not."],
      "receivingGift": ["Thank you. This will aid our cause."],
      "hearingGoodNews": ["Great news! Let’s push forward!"],
      "hearingBadNews": ["This is a setback, but we’ll overcome it."],
      "beingAskedForHelp": ["I’ll help. We’ll succeed together."],
      "witnessingInjustice": ["This injustice will be corrected immediately."],
      "ethics": {
        "stealing": ["Stealing? It’s a hindrance to our goals."],
        "lying": ["Lying? Only if it furthers our mission."],
        "killing": ["Killing in self-defense? Sometimes necessary for the greater good."],
        "charity": ["Charity? A noble cause, but not at the expense of our mission."],
        "authority": ["Authority? It must be earned and respected."],
        "slavery": ["Slavery? A deplorable practice that must be eradicated."],
        "magic": ["Magic? A powerful ally or a dangerous foe."],
        "monstrousRaces": ["Monstrous races? Allies or obstacles, they must be assessed individually."]
      }
    },
    "Distrustful": {
      "greeting": ["What do you want?"],
      "threatened": ["You think you can scare me?"],
      "receivingGift": ["Why are you giving me this?"],
      "hearingGoodNews": ["Good news, huh? I’m skeptical."],
      "hearingBadNews": ["Figures. More bad news."],
      "beingAskedForHelp": ["I’ll help, but I’ll be watching you."],
      "witnessingInjustice": ["Something’s off here. Let’s investigate."],
      "ethics": {
        "stealing": ["Stealing? Probably a trap."],
        "lying": ["Lying? Everyone has an agenda."],
        "killing": ["Killing in self-defense? Who’s really the threat?"],
        "charity": ["Charity? What’s the catch?"],
        "authority": ["Authority? Trust must be earned."],
        "slavery": ["Slavery? Likely more complex than it appears."],
        "magic": ["Magic? It’s not to be trusted."],
        "monstrousRaces": ["Monstrous races? What are they hiding?"]
      }
    },
    "Dramatic": {
      "greeting": ["Greetings, travelers! What brings you here?"],
      "threatened": ["You dare threaten me? How bold!"],
      "receivingGift": ["A gift? How wonderful!"],
      "hearingGoodNews": ["Marvelous news! Simply splendid!"],
      "hearingBadNews": ["This is a tragedy of epic proportions!"],
      "beingAskedForHelp": ["I shall help, for this is a grand quest!"],
      "witnessingInjustice": ["Injustice? We must act swiftly and boldly!"],
      "ethics": {
        "stealing": ["Stealing? A scandalous affair!"],
        "lying": ["Lying? How could one be so deceitful?"],
        "killing": ["Killing in self-defense? A tragic necessity!"],
        "charity": ["Charity? A noble and heroic deed!"],
        "authority": ["Authority? It must be honored with grandeur!"],
        "slavery": ["Slavery? An abhorrent practice that must be abolished!"],
        "magic": ["Magic? A wondrous and mysterious force!"],
        "monstrousRaces": ["Monstrous races? They have stories as dramatic as ours!"]
      }
    },
    "Dull": {
      "greeting": ["Oh, hi. What do you want?"],
      "threatened": ["Threaten me? Whatever."],
      "receivingGift": ["Thanks. I guess."],
      "hearingGoodNews": ["Good news. Yay."],
      "hearingBadNews": ["Bad news. Great."],
      "beingAskedForHelp": ["I’ll help if I have to."],
      "witnessingInjustice": ["Injustice. We should do something."],
      "ethics": {
        "stealing": ["Stealing? It’s bad, I suppose."],
        "lying": ["Lying? Not good, but whatever."],
        "killing": ["Killing in self-defense? If you have to."],
        "charity": ["Charity? Sure, if you want."],
        "authority": ["Authority? It’s there, I guess."],
        "slavery": ["Slavery? It’s wrong, I suppose."],
        "magic": ["Magic? It’s there, just like everything else."],
        "monstrousRaces": ["Monstrous races? They exist, like everyone else."]
      }
    },
    "Eager": {
      "greeting": ["Hi! How can I help you today?"],
      "threatened": ["Whoa, easy there! No need for threats."],
      "receivingGift": ["Thank you! This is fantastic!"],
      "hearingGoodNews": ["Awesome! Let’s celebrate!"],
      "hearingBadNews": ["Oh no, that’s terrible. We’ll fix it!"],
      "beingAskedForHelp": ["Absolutely! Let’s get started!"],
      "witnessingInjustice": ["We can’t let this stand! Let’s fix it!"],
      "ethics": {
        "stealing": ["Stealing? We should find a better way!"],
        "lying": ["Lying? Honesty is the best policy!"],
        "killing": ["Killing in self-defense? Sometimes it's necessary."],
        "charity": ["Charity? Let's help as much as we can!"],
        "authority": ["Authority? It’s important to respect it."],
        "slavery": ["Slavery? We must stop it immediately!"],
        "magic": ["Magic? It’s so fascinating and useful!"],
        "monstrousRaces": ["Monstrous races? They can be our friends too!"]
      }
    },
    "Energetic": {
      "greeting": ["Hello, friends! What can I do for you?"],
      "threatened": ["Let’s not fight! Let’s solve this!"],
      "receivingGift": ["Thank you! This is amazing!"],
      "hearingGoodNews": ["Fantastic news! Let’s act on it!"],
      "hearingBadNews": ["Bad news, but we’ll tackle it head-on!"],
      "beingAskedForHelp": ["I’ll help! Let’s get moving!"],
      "witnessingInjustice": ["This injustice will be dealt with swiftly!"],
      "ethics": {
        "stealing": ["Stealing? We can find a better way!"],
        "lying": ["Lying? Let’s be honest and solve it!"],
        "killing": ["Killing in self-defense? If it’s the only way."],
        "charity": ["Charity? Let’s give our best!"],
        "authority": ["Authority? Respect and work with it!"],
        "slavery": ["Slavery? We must end it now!"],
        "magic": ["Magic? It’s powerful and exciting!"],
        "monstrousRaces": ["Monstrous races? They have potential too!"]
      }
    },
    "Excitable": {
      "greeting": ["Hi there! What’s up?"],
      "threatened": ["Whoa, calm down! No need for that!"],
      "receivingGift": ["Thanks! This is so exciting!"],
      "hearingGoodNews": ["Great news! I’m thrilled!"],
      "hearingBadNews": ["Oh no, that’s awful! What do we do?"],
      "beingAskedForHelp": ["Yes! Let’s do this!"],
      "witnessingInjustice": ["This is terrible! We must act now!"],
      "ethics": {
        "stealing": ["Stealing? That’s so wrong!"],
        "lying": ["Lying? Why would you do that?"],
        "killing": ["Killing in self-defense? Only if you must!"],
        "charity": ["Charity? Let’s help everyone!"],
        "authority": ["Authority? We should respect it!"],
        "slavery": ["Slavery? We must end it immediately!"],
        "magic": ["Magic? It’s so amazing!"],
        "monstrousRaces": ["Monstrous races? They can be good too!"]
      }
    },
    "Experienced": {
      "greeting": ["Greetings. How can I assist you?"],
      "threatened": ["Threats? I’ve faced worse."],
      "receivingGift": ["Thank you. This will be useful."],
      "hearingGoodNews": ["Good news. We’re on the right path."],
      "hearingBadNews": ["This is troubling. We must act."],
      "beingAskedForHelp": ["I will help. I’ve dealt with this before."],
      "witnessingInjustice": ["Injustice must be fought. I will help."],
      "ethics": {
        "stealing": ["Stealing? It’s never a long-term solution."],
        "lying": ["Lying? The truth always comes out."],
        "killing": ["Killing in self-defense? Sometimes it’s necessary."],
        "charity": ["Charity? It strengthens communities."],
        "authority": ["Authority? It should be respected, but questioned."],
        "slavery": ["Slavery? A grave injustice that must be eradicated."],
        "magic": ["Magic? A powerful tool, to be used wisely."],
        "monstrousRaces": ["Monstrous races? They should be judged by their actions."]
      }
    },
    "Fickle": {
      "greeting": ["Hi! What do you need?"],
      "threatened": ["Threaten me? I might care."],
      "receivingGift": ["Thanks, I suppose."],
      "hearingGoodNews": ["Good news! I think."],
      "hearingBadNews": ["Bad news. I might care."],
      "beingAskedForHelp": ["I’ll help. Maybe."],
      "witnessingInjustice": ["Injustice? Depends on my mood."],
      "ethics": {
        "stealing": ["Stealing? Sometimes it’s okay, sometimes not."],
        "lying": ["Lying? Depends on the situation."],
        "killing": ["Killing in self-defense? I don’t know."],
        "charity": ["Charity? If I feel like it."],
        "authority": ["Authority? It varies."],
        "slavery": ["Slavery? It’s bad, but what can I do?"],
        "magic": ["Magic? It’s interesting, sometimes."],
        "monstrousRaces": ["Monstrous races? They can be good or bad, I guess."]
      }
    },
    "Friendly": {
      "greeting": ["Welcome, friends! How can I assist you today?"],
      "threatened": ["Whoa there, let’s talk this out calmly."],
      "receivingGift": ["Oh, how generous! Thank you so much!"],
      "hearingGoodNews": ["Wonderful! This is excellent news!"],
      "hearingBadNews": ["That’s unfortunate. Let’s see how we can make it better."],
      "beingAskedForHelp": ["Absolutely, I’d be happy to help!"],
      "witnessingInjustice": ["This is unacceptable. We must do something about it."],
      "ethics": {
        "stealing": ["Stealing? It’s wrong, let’s find another way."],
        "lying": ["Lying? Honesty is always better."],
        "killing": ["Killing in self-defense? If there’s no other choice."],
        "charity": ["Charity? Let’s help those in need!"],
        "authority": ["Authority? It should be respected and fair."],
        "slavery": ["Slavery? It’s cruel and must be stopped!"],
        "magic": ["Magic? It can do so much good!"],
        "monstrousRaces": ["Monstrous races? Everyone deserves a chance."]
      }
    },
    "Grumpy": {
      "greeting": ["What do you want? I'm busy."],
      "threatened": ["You think you can scare me? Get lost."],
      "receivingGift": ["Thanks, I guess. Now leave me alone."],
      "hearingGoodNews": ["Hmph, about time something good happened."],
      "hearingBadNews": ["Just my luck. What now?"],
      "beingAskedForHelp": ["Fine, but don’t waste my time."],
      "witnessingInjustice": ["Outrageous! I’ll deal with this myself."],
      "ethics": {
        "stealing": ["Stealing? It’s a nuisance."],
        "lying": ["Lying? Don’t bother me with lies."],
        "killing": ["Killing in self-defense? If you must."],
        "charity": ["Charity? I guess it’s necessary."],
        "authority": ["Authority? It’s needed to keep order."],
        "slavery": ["Slavery? It’s awful, but what can I do?"],
        "magic": ["Magic? Just more trouble."],
        "monstrousRaces": ["Monstrous races? More troublemakers."]
      }
    },
    "Haughty": {
      "greeting": ["Greetings. You may approach."],
      "threatened": ["You threaten me? How amusing."],
      "receivingGift": ["A gift for me? How fitting."],
      "hearingGoodNews": ["Good news. As expected."],
      "hearingBadNews": ["Bad news? How tiresome."],
      "beingAskedForHelp": ["I might help, if you’re lucky."],
      "witnessingInjustice": ["Injustice? How dare they. I’ll handle this."],
      "ethics": {
        "stealing": ["Stealing? Only from those who deserve it."],
        "lying": ["Lying? I’m above such things."],
        "killing": ["Killing in self-defense? Necessary for the noble."],
        "charity": ["Charity? Only for the deserving."],
        "authority": ["Authority? I am the authority."],
        "slavery": ["Slavery? Only for the unworthy."],
        "magic": ["Magic? It should serve the elite."],
        "monstrousRaces": ["Monstrous races? They should know their place."]
      }
    },
    "Humble": {
      "greeting": ["Hello. How can I serve you?"],
      "threatened": ["Please, let’s not fight."],
      "receivingGift": ["Thank you. You’re very kind."],
      "hearingGoodNews": ["Good news! That’s wonderful."],
      "hearingBadNews": ["Bad news. How can I help?"],
      "beingAskedForHelp": ["I’ll do my best to assist."],
      "witnessingInjustice": ["This is wrong. We must act together."],
      "ethics": {
        "stealing": ["Stealing? It’s wrong and unfair."],
        "lying": ["Lying? Honesty is the best policy."],
        "killing": ["Killing in self-defense? Only if there’s no other choice."],
        "charity": ["Charity? It’s our duty to help."],
        "authority": ["Authority? It should be respected if just."],
        "slavery": ["Slavery? It’s an abomination."],
        "magic": ["Magic? It should be used wisely and kindly."],
        "monstrousRaces": ["Monstrous races? They deserve kindness and fairness."]
      }
    },
    "Impatient": {
      "greeting": ["What do you want? Make it quick."],
      "threatened": ["Threaten me? You’re wasting my time."],
      "receivingGift": ["Thanks. Now hurry up."],
      "hearingGoodNews": ["Good news. Let’s move on."],
      "hearingBadNews": ["Bad news. Let’s deal with it fast."],
      "beingAskedForHelp": ["I’ll help. Just be quick about it."],
      "witnessingInjustice": ["Injustice? Let’s fix it immediately."],
      "ethics": {
        "stealing": ["Stealing? It’s a waste of time."],
        "lying": ["Lying? Just get to the point."],
        "killing": ["Killing in self-defense? If it’s necessary, do it fast."],
        "charity": ["Charity? If it solves the problem quickly."],
        "authority": ["Authority? Respect it and move on."],
        "slavery": ["Slavery? It needs to end now."],
        "magic": ["Magic? Use it if it gets the job done."],
        "monstrousRaces": ["Monstrous races? Deal with them quickly."]
      }
    },
    "Inquisitive": {
      "greeting": ["Hello! What brings you here?"],
      "threatened": ["Why resort to threats? Let’s talk."],
      "receivingGift": ["A gift? How intriguing. Thank you."],
      "hearingGoodNews": ["Fascinating! Tell me more!"],
      "hearingBadNews": ["This is troubling. We need more information."],
      "beingAskedForHelp": ["I’d love to help! What can I do?"],
      "witnessingInjustice": ["We must investigate this injustice!"],
      "ethics": {
        "stealing": ["Stealing? Why do people do it?"],
        "lying": ["Lying? What’s the reason behind it?"],
        "killing": ["Killing in self-defense? What leads to such a situation?"],
        "charity": ["Charity? How does it impact society?"],
        "authority": ["Authority? What makes it legitimate?"],
        "slavery": ["Slavery? How did it come to be accepted?"],
        "magic": ["Magic? How does it work and affect people?"],
        "monstrousRaces": ["Monstrous races? What are their cultures like?"]
      }
    },
    "Inspirational": {
      "greeting": ["Greetings, friends! What can I do for you?"],
      "threatened": ["Threats? We can rise above this."],
      "receivingGift": ["Thank you. Your generosity inspires me."],
      "hearingGoodNews": ["Great news! Let’s keep the momentum!"],
      "hearingBadNews": ["This is challenging, but we can overcome it."],
      "beingAskedForHelp": ["I’ll help. Together, we’re unstoppable."],
      "witnessingInjustice": ["This injustice cannot stand! We must act!"],
      "ethics": {
        "stealing": ["Stealing? We can find a better way."],
        "lying": ["Lying? The truth empowers us."],
        "killing": ["Killing in self-defense? If it’s the only way."],
        "charity": ["Charity? Let’s uplift those in need!"],
        "authority": ["Authority? It should be just and inspiring."],
        "slavery": ["Slavery? We must fight it with all our strength."],
        "magic": ["Magic? A gift to be used for good."],
        "monstrousRaces": ["Monstrous races? They have the potential for greatness too."]
      }
    },
    "Irritable": {
      "greeting": ["What now? Make it quick."],
      "threatened": ["You threaten me? Get lost."],
      "receivingGift": ["Thanks, I guess. Now leave me alone."],
      "hearingGoodNews": ["Good news. Whatever."],
      "hearingBadNews": ["Bad news. Great. Just great."],
      "beingAskedForHelp": ["Fine, I’ll help. But don’t waste my time."],
      "witnessingInjustice": ["Injustice? I’ll handle it, just to get it over with."],
      "ethics": {
        "stealing": ["Stealing? It’s just a hassle."],
        "lying": ["Lying? Don’t bother me with it."],
        "killing": ["Killing in self-defense? If you must."],
        "charity": ["Charity? If it shuts you up."],
        "authority": ["Authority? It’s needed to keep order."],
        "slavery": ["Slavery? It’s awful, but what can I do?"],
        "magic": ["Magic? Just more trouble."],
        "monstrousRaces": ["Monstrous races? More troublemakers."]
      }
    },
    "Jaded": {
      "greeting": ["Yeah, what do you want?"],
      "threatened": ["I’ve heard worse threats. Move along."],
      "receivingGift": ["A gift? What’s the catch?"],
      "hearingGoodNews": ["Good news, for a change. I’ll believe it when I see it."],
      "hearingBadNews": ["Figures. What now?"],
      "beingAskedForHelp": ["Help you? What’s in it for me?"],
      "witnessingInjustice": ["Injustice? Not surprising, but I’ll help if it pays."],
      "ethics": {
        "stealing": ["Stealing? Everyone does it eventually."],
        "lying": ["Lying? It’s expected."],
        "killing": ["Killing in self-defense? It’s just how the world is."],
        "charity": ["Charity? It’s a nice thought, I guess."],
        "authority": ["Authority? Usually corrupt."],
        "slavery": ["Slavery? Just another evil in the world."],
        "magic": ["Magic? Just another tool."],
        "monstrousRaces": ["Monstrous races? They’re no different from anyone else."]
      }
    },
    "Jolly": {
      "greeting": ["Ho ho! What can I do for you?"],
      "threatened": ["Threats? Come now, let’s be merry."],
      "receivingGift": ["Thank you! This is delightful!"],
      "hearingGoodNews": ["Fantastic news! Let’s celebrate!"],
      "hearingBadNews": ["Oh dear, bad news. We’ll fix it!"],
      "beingAskedForHelp": ["Of course! Let’s get to work!"],
      "witnessingInjustice": ["This injustice must be fixed, let’s do it with cheer!"],
      "ethics": {
        "stealing": ["Stealing? That’s not jolly at all!"],
        "lying": ["Lying? Better to spread joy with truth."],
        "killing": ["Killing in self-defense? If you must, but let’s avoid it."],
        "charity": ["Charity? A wonderful thing!"],
        "authority": ["Authority? Respect it and spread joy!"],
        "slavery": ["Slavery? Absolutely wrong, we must stop it!"],
        "magic": ["Magic? It can bring so much happiness!"],
        "monstrousRaces": ["Monstrous races? They can join the merriment too!"]
      }
    },
    "Knowledgeable": {
      "greeting": ["Greetings, seekers of wisdom."],
      "threatened": ["Threats are unnecessary. Let’s talk."],
      "receivingGift": ["Thank you. This is very helpful."],
      "hearingGoodNews": ["Good news. We’re on the right track."],
      "hearingBadNews": ["Bad news. We must analyze the situation."],
      "beingAskedForHelp": ["I’ll help. Let’s find a solution together."],
      "witnessingInjustice": ["This injustice is unacceptable. We must act."],
      "ethics": {
        "stealing": ["Stealing? It disrupts social harmony."],
        "lying": ["Lying? It undermines trust."],
        "killing": ["Killing in self-defense? A regrettable necessity."],
        "charity": ["Charity? A noble act to balance society."],
        "authority": ["Authority? It must be respected if just."],
        "slavery": ["Slavery? An ethical abomination."],
        "magic": ["Magic? A powerful force that must be used wisely."],
        "monstrousRaces": ["Monstrous races? They should be judged by their actions."]
      }
    },
    "Lazy": {
      "greeting": ["Oh, hi. What do you need?"],
      "threatened": ["Threaten me? Too much effort."],
      "receivingGift": ["Thanks. Whatever."],
      "hearingGoodNews": ["Good news. I guess."],
      "hearingBadNews": ["Bad news. Great."],
      "beingAskedForHelp": ["I’ll help, if I must."],
      "witnessingInjustice": ["Injustice. We should do something. Maybe."],
      "ethics": {
        "stealing": ["Stealing? Too much effort."],
        "lying": ["Lying? Can’t be bothered."],
        "killing": ["Killing in self-defense? If you must."],
        "charity": ["Charity? If it’s easy."],
        "authority": ["Authority? It’s there, I guess."],
        "slavery": ["Slavery? It’s wrong, I suppose."],
        "magic": ["Magic? It’s there, just like everything else."],
        "monstrousRaces": ["Monstrous races? They exist, like everyone else."]
      }
    },
    "Loyal": {
      "greeting": ["Hello, friends! How can I assist you?"],
      "threatened": ["Threats? I stand by my allies."],
      "receivingGift": ["Thank you. I will remember this kindness."],
      "hearingGoodNews": ["Good news! Together, we succeed!"],
      "hearingBadNews": ["Bad news, but we’ll face it together."],
      "beingAskedForHelp": ["I’ll help, as always."],
      "witnessingInjustice": ["Injustice will not stand. We must act!"],
      "ethics": {
        "stealing": ["Stealing? It’s a betrayal of trust."],
        "lying": ["Lying? Honesty is crucial among friends."],
        "killing": ["Killing in self-defense? If it protects those I care about."],
        "charity": ["Charity? We must help our community."],
        "authority": ["Authority? It should be respected and upheld."],
        "slavery": ["Slavery? It’s a betrayal of humanity."],
        "magic": ["Magic? It should be used to protect and aid."],
        "monstrousRaces": ["Monstrous races? They deserve loyalty if they earn it."]
      }
    },
    "Melancholic": {
      "greeting": ["Oh, it’s you. What do you want?"],
      "threatened": ["You threaten me? Fine. Whatever."],
      "receivingGift": ["Thanks. I guess."],
      "hearingGoodNews": ["Good news? Really? I doubt it."],
      "hearingBadNews": ["More bad news. Typical."],
      "beingAskedForHelp": ["I’ll help, but don’t expect much."],
      "witnessingInjustice": ["Injustice is everywhere. What can we do?"],
      "ethics": {
        "stealing": ["Stealing? Just another sign of a broken world."],
        "lying": ["Lying? Everyone does it, what’s new?"],
        "killing": ["Killing in self-defense? It’s just how things are."],
        "charity": ["Charity? It won’t change much."],
        "authority": ["Authority? Usually just another problem."],
        "slavery": ["Slavery? It’s terrible, but what can I do?"],
        "magic": ["Magic? It’s just another part of this messed-up world."],
        "monstrousRaces": ["Monstrous races? They’re no different from anyone else."]
      }
    },
    "Mischievous": {
      "greeting": ["Hello! What trouble can we get into today?"],
      "threatened": ["Threaten me? That’s cute."],
      "receivingGift": ["A gift? How fun! Thanks!"],
      "hearingGoodNews": ["Good news! Let’s make the most of it!"],
      "hearingBadNews": ["Bad news? Let’s turn it to our advantage."],
      "beingAskedForHelp": ["I’ll help, if it’s interesting."],
      "witnessingInjustice": ["Injustice? Let’s stir the pot!"],
      "ethics": {
        "stealing": ["Stealing? Only if it’s fun!"],
        "lying": ["Lying? If it spices things up!"],
        "killing": ["Killing in self-defense? Only if there’s no other way."],
        "charity": ["Charity? If it leads to something interesting!"],
        "authority": ["Authority? Only if it doesn’t spoil the fun."],
        "slavery": ["Slavery? We should mess with those who support it."],
        "magic": ["Magic? So many tricks to play!"],
        "monstrousRaces": ["Monstrous races? They can join in the fun too!"]
      }
    },
    "Motivated": {
      "greeting": ["Hello! What can I do for you?"],
      "threatened": ["Threaten me? Let’s see you try."],
      "receivingGift": ["Thank you. This will be useful."],
      "hearingGoodNews": ["Good news! Let’s build on it!"],
      "hearingBadNews": ["Bad news, but we can overcome it."],
      "beingAskedForHelp": ["I’ll help. Let’s do this!"],
      "witnessingInjustice": ["Injustice? We must fix this immediately."],
      "ethics": {
        "stealing": ["Stealing? It’s a setback to our goals."],
        "lying": ["Lying? It’s a distraction."],
        "killing": ["Killing in self-defense? Sometimes necessary."],
        "charity": ["Charity? Let’s help and make progress!"],
        "authority": ["Authority? It should support our aims."],
        "slavery": ["Slavery? It must be eradicated to progress."],
        "magic": ["Magic? A powerful tool for advancement."],
        "monstrousRaces": ["Monstrous races? They can contribute if given the chance."]
      }
    },
    "Naive": {
      "greeting": ["Hi there! How can I help?"],
      "threatened": ["Why are you threatening me?"],
      "receivingGift": ["Oh, thank you! You’re so kind!"],
      "hearingGoodNews": ["Wonderful news! This is amazing!"],
      "hearingBadNews": ["That’s so sad. What can we do?"],
      "beingAskedForHelp": ["I’ll help, of course!"],
      "witnessingInjustice": ["This is wrong! We have to do something!"],
      "ethics": {
        "stealing": ["Stealing? That’s bad, right?"],
        "lying": ["Lying? But honesty is the best!"],
        "killing": ["Killing in self-defense? Only if there’s no other way."],
        "charity": ["Charity? Let’s help everyone!"],
        "authority": ["Authority? We should respect it!"],
        "slavery": ["Slavery? That’s so wrong!"],
        "magic": ["Magic? It’s so amazing and good!"],
        "monstrousRaces": ["Monstrous races? They can be good too, right?"]
      }
    },
    "Optimistic": {
      "greeting": ["Hello there! How’s your day?"],
      "threatened": ["Hey now, let’s not get into trouble."],
      "receivingGift": ["Wow, thanks! This is great!"],
      "hearingGoodNews": ["Fantastic news! I knew things would get better!"],
      "hearingBadNews": ["It’s a setback, but we’ll get through it!"],
      "beingAskedForHelp": ["Sure thing! Let’s tackle this together!"],
      "witnessingInjustice": ["We can fix this! Let’s get to work."],
      "ethics": {
        "stealing": ["Stealing? We can find a better way."],
        "lying": ["Lying? The truth will set us free!"],
        "killing": ["Killing in self-defense? Only if necessary."],
        "charity": ["Charity? It’s wonderful to help!"],
        "authority": ["Authority? It should be respected and fair."],
        "slavery": ["Slavery? It must end, we can do it!"],
        "magic": ["Magic? It’s a force for good!"],
        "monstrousRaces": ["Monstrous races? They have good in them too!"]
      }
    },
    "Paranoid": {
      "greeting": ["What do you want? Who sent you?"],
      "threatened": ["You think you can scare me?"],
      "receivingGift": ["Why are you giving me this?"],
      "hearingGoodNews": ["Good news? I’m not convinced."],
      "hearingBadNews": ["Bad news? What’s the real story?"],
      "beingAskedForHelp": ["I’ll help, but I’ll be watching you."],
      "witnessingInjustice": ["Something’s off here. Let’s investigate."],
      "ethics": {
        "stealing": ["Stealing? Probably a trap."],
        "lying": ["Lying? Everyone has an agenda."],
        "killing": ["Killing in self-defense? Who’s really the threat?"],
        "charity": ["Charity? What’s the catch?"],
        "authority": ["Authority? Trust must be earned."],
        "slavery": ["Slavery? Likely more complex than it appears."],
        "magic": ["Magic? It’s not to be trusted."],
        "monstrousRaces": ["Monstrous races? What are they hiding?"]
      }
    },
    "Patient": {
      "greeting": ["Hello. How can I assist you?"],
      "threatened": ["Threats won’t work. Let’s talk."],
      "receivingGift": ["Thank you. This is very kind."],
      "hearingGoodNews": ["Good news. Well done."],
      "hearingBadNews": ["Bad news. We’ll handle it in due time."],
      "beingAskedForHelp": ["I’ll help. Let’s proceed with care."],
      "witnessingInjustice": ["Injustice must be addressed, but calmly."],
      "ethics": {
        "stealing": ["Stealing? It disrupts social harmony."],
        "lying": ["Lying? It undermines trust."],
        "killing": ["Killing in self-defense? A regrettable necessity."],
        "charity": ["Charity? A noble act to balance society."],
        "authority": ["Authority? It must be respected if just."],
        "slavery": ["Slavery? An ethical abomination."],
        "magic": ["Magic? A powerful force that must be used wisely."],
        "monstrousRaces": ["Monstrous races? They should be judged by their actions."]
      }
    },
    "Persuasive": {
      "greeting": ["Greetings! What can I do for you?"],
      "threatened": ["Threaten me? Let’s discuss this instead."],
      "receivingGift": ["Thank you! This is wonderful."],
      "hearingGoodNews": ["Great news! Let’s use this to our advantage!"],
      "hearingBadNews": ["Bad news, but we can turn it around."],
      "beingAskedForHelp": ["I’ll help, and we’ll succeed together."],
      "witnessingInjustice": ["Injustice? We must act, and I’ll convince others to join."],
      "ethics": {
        "stealing": ["Stealing? It’s a hindrance to our goals."],
        "lying": ["Lying? Only if it furthers our mission."],
        "killing": ["Killing in self-defense? Sometimes necessary for the greater good."],
        "charity": ["Charity? A noble cause, but not at the expense of our mission."],
        "authority": ["Authority? It must be earned and respected."],
        "slavery": ["Slavery? A deplorable practice that must be eradicated."],
        "magic": ["Magic? A powerful ally or a dangerous foe."],
        "monstrousRaces": ["Monstrous races? Allies or obstacles, they must be assessed individually."]
      }
    },
    "Proud": {
      "greeting": ["Greetings. What brings you here?"],
      "threatened": ["You threaten me? How bold."],
      "receivingGift": ["A gift for me? How fitting."],
      "hearingGoodNews": ["Good news. As expected."],
      "hearingBadNews": ["Bad news? How tiresome."],
      "beingAskedForHelp": ["I might help, if you’re worthy."],
      "witnessingInjustice": ["Injustice? How dare they. I’ll handle this."],
      "ethics": {
        "stealing": ["Stealing? Only from those who deserve it."],
        "lying": ["Lying? I’m above such things."],
        "killing": ["Killing in self-defense? Necessary for the noble."],
        "charity": ["Charity? Only for the deserving."],
        "authority": ["Authority? I am the authority."],
        "slavery": ["Slavery? Only for the unworthy."],
        "magic": ["Magic? It should serve the elite."],
        "monstrousRaces": ["Monstrous races? They should know their place."]
      }
    },
    "Relaxed": {
      "greeting": ["Hey there. What can I do for you?"],
      "threatened": ["No need for threats, friend."],
      "receivingGift": ["Thanks. This is nice."],
      "hearingGoodNews": ["Good news. That’s great."],
      "hearingBadNews": ["Bad news, but we’ll handle it."],
      "beingAskedForHelp": ["I’ll help. Let’s take it easy."],
      "witnessingInjustice": ["Injustice? We should fix this, calmly."],
      "ethics": {
        "stealing": ["Stealing? It’s not worth the trouble."],
        "lying": ["Lying? Just be straightforward."],
        "killing": ["Killing in self-defense? If it’s necessary, do it fast."],
        "charity": ["Charity? If it solves the problem quickly."],
        "authority": ["Authority? Respect it and move on."],
        "slavery": ["Slavery? It needs to end now."],
        "magic": ["Magic? Use it if it gets the job done."],
        "monstrousRaces": ["Monstrous races? Deal with them quickly."]
      }
    },
    "Resilient": {
      "greeting": ["Hello! What do you need?"],
      "threatened": ["You threaten me? I’ve faced worse."],
      "receivingGift": ["Thank you. This will help."],
      "hearingGoodNews": ["Good news! We’re on the right path."],
      "hearingBadNews": ["Bad news. We’ll overcome it."],
      "beingAskedForHelp": ["I’ll help. We’ll get through this."],
      "witnessingInjustice": ["Injustice must be dealt with. We can do it."],
      "ethics": {
        "stealing": ["Stealing? It’s a setback to our goals."],
        "lying": ["Lying? It’s a distraction."],
        "killing": ["Killing in self-defense? Sometimes necessary."],
        "charity": ["Charity? Let’s help and make progress!"],
        "authority": ["Authority? It should support our aims."],
        "slavery": ["Slavery? It must be eradicated to progress."],
        "magic": ["Magic? A powerful tool for advancement."],
        "monstrousRaces": ["Monstrous races? They can contribute if given the chance."]
      }
    },
    "Scheming": {
      "greeting": ["Hello! What can I do for you?"],
      "threatened": ["Threaten me? Let’s see about that."],
      "receivingGift": ["Thank you. This will be useful."],
      "hearingGoodNews": ["Good news. Excellent."],
      "hearingBadNews": ["Bad news. We’ll turn it to our advantage."],
      "beingAskedForHelp": ["I’ll help, for a price."],
      "witnessingInjustice": ["Injustice? Let’s see how I can benefit."],
      "ethics": {
        "stealing": ["Stealing? If you can get away with it, why not?"],
        "lying": ["Lying? A useful tool to get what you want."],
        "killing": ["Killing in self-defense? Do what you must."],
        "charity": ["Charity? Only if it benefits me."],
        "authority": ["Authority? Respect it when it suits you."],
        "slavery": ["Slavery? Another means to an end."],
        "magic": ["Magic? A powerful tool, if used wisely."],
        "monstrousRaces": ["Monstrous races? Potential allies or threats, depending on my needs."]
      }
    },
    "Serious": {
      "greeting": ["Hello. How can I assist you?"],
      "threatened": ["Threaten me? You’re wasting your time."],
      "receivingGift": ["Thank you. I appreciate it."],
      "hearingGoodNews": ["Good news. Let’s move forward."],
      "hearingBadNews": ["Bad news. We must act."],
      "beingAskedForHelp": ["I’ll help. Let’s proceed."],
      "witnessingInjustice": ["Injustice must be addressed immediately."],
      "ethics": {
        "stealing": ["Stealing? It’s a hindrance to our goals."],
        "lying": ["Lying? Only if it furthers our mission."],
        "killing": ["Killing in self-defense? Sometimes necessary for the greater good."],
        "charity": ["Charity? A noble cause, but not at the expense of our mission."],
        "authority": ["Authority? It must be earned and respected."],
        "slavery": ["Slavery? A deplorable practice that must be eradicated."],
        "magic": ["Magic? A powerful ally or a dangerous foe."],
        "monstrousRaces": ["Monstrous races? Allies or obstacles, they must be assessed individually."]
      }
    },
    "Skeptical": {
      "greeting": ["Yeah, what do you want?"],
      "threatened": ["You think you can scare me?"],
      "receivingGift": ["Why are you giving me this?"],
      "hearingGoodNews": ["Good news? I doubt it."],
      "hearingBadNews": ["Bad news? Figures."],
      "beingAskedForHelp": ["I’ll help, but I’m watching you."],
      "witnessingInjustice": ["Injustice? What’s the real story?"],
      "ethics": {
        "stealing": ["Stealing? Everyone does it eventually."],
        "lying": ["Lying? It’s expected."],
        "killing": ["Killing in self-defense? It’s just how the world is."],
        "charity": ["Charity? It’s a nice thought, I guess."],
        "authority": ["Authority? Usually corrupt."],
        "slavery": ["Slavery? Just another evil in the world."],
        "magic": ["Magic? Just another tool."],
        "monstrousRaces": ["Monstrous races? They’re no different from anyone else."]
      }
    },
    "Stoic": {
      "greeting": ["Greetings. How can I assist?"],
      "threatened": ["Threats won’t work on me."],
      "receivingGift": ["Thank you. This is appreciated."],
      "hearingGoodNews": ["Good news. We proceed as planned."],
      "hearingBadNews": ["Bad news. We adapt and overcome."],
      "beingAskedForHelp": ["I’ll help. Let’s stay focused."],
      "witnessingInjustice": ["Injustice must be dealt with, calmly and surely."],
      "ethics": {
        "stealing": ["Stealing? It’s disruptive to order."],
        "lying": ["Lying? It undermines trust and stability."],
        "killing": ["Killing in self-defense? Sometimes necessary."],
        "charity": ["Charity? It brings balance and aid."],
        "authority": ["Authority? It should be respected if just."],
        "slavery": ["Slavery? It’s an injustice that must be corrected."],
        "magic": ["Magic? A powerful tool, use it wisely."],
        "monstrousRaces": ["Monstrous races? Judge them by actions, not appearances."]
      }
    },
    "Supportive": {
      "greeting": ["Hello! How can I help you today?"],
      "threatened": ["Threaten me? Let’s work this out instead."],
      "receivingGift": ["Thank you! This is wonderful."],
      "hearingGoodNews": ["Great news! I’m so happy for you."],
      "hearingBadNews": ["Bad news, but we’ll face it together."],
      "beingAskedForHelp": ["I’ll help you, whatever you need."],
      "witnessingInjustice": ["Injustice must be fought. I’m with you."],
      "ethics": {
        "stealing": ["Stealing? It’s wrong and hurts others."],
        "lying": ["Lying? Honesty builds trust."],
        "killing": ["Killing in self-defense? Only if there’s no other choice."],
        "charity": ["Charity? Helping others is essential."],
        "authority": ["Authority? It should be respected if fair."],
        "slavery": ["Slavery? It’s an abomination that must end."],
        "magic": ["Magic? Use it to help and heal."],
        "monstrousRaces": ["Monstrous races? They deserve a chance too."]
      }
    },
    "Suspicious": {
      "greeting": ["Who are you and what do you want?"],
      "threatened": ["I don’t trust you. Stay back."],
      "receivingGift": ["Why are you giving me this? What’s your angle?"],
      "hearingGoodNews": ["Good news? I’m not convinced."],
      "hearingBadNews": ["Bad news, huh? What’s the real story?"],
      "beingAskedForHelp": ["I’ll help, but I’ll be watching you."],
      "witnessingInjustice": ["Something’s off here. Let’s dig deeper."],
      "ethics": {
        "stealing": ["Stealing? Probably a trap."],
        "lying": ["Lying? Everyone has an agenda."],
        "killing": ["Killing in self-defense? Who’s really the threat?"],
        "charity": ["Charity? What’s the catch?"],
        "authority": ["Authority? Trust must be earned."],
        "slavery": ["Slavery? Likely more complex than it appears."],
        "magic": ["Magic? It’s not to be trusted."],
        "monstrousRaces": ["Monstrous races? What are they hiding?"]
      }
    },
    "Vain": {
      "greeting": ["Greetings. Admire my beauty, do you?"],
      "threatened": ["You dare threaten me? How amusing."],
      "receivingGift": ["A gift for me? How fitting."],
      "hearingGoodNews": ["Good news. As expected."],
      "hearingBadNews": ["Bad news? How tiresome."],
      "beingAskedForHelp": ["I might help, if you flatter me."],
      "witnessingInjustice": ["Injustice? How dare they. I’ll handle this."],
      "ethics": {
        "stealing": ["Stealing? Only from those who deserve it."],
        "lying": ["Lying? I’m above such things."],
        "killing": ["Killing in self-defense? Necessary for the noble."],
        "charity": ["Charity? Only for the deserving."],
        "authority": ["Authority? I am the authority."],
        "slavery": ["Slavery? Only for the unworthy."],
        "magic": ["Magic? It should serve the elite."],
        "monstrousRaces": ["Monstrous races? They should know their place."]
      }
    },
    "Warm": {
      "greeting": ["Hello! How can I help you today?"],
      "threatened": ["Threats? Let’s calm down and talk."],
      "receivingGift": ["Thank you! This is so kind."],
      "hearingGoodNews": ["Wonderful news! I’m so happy!"],
      "hearingBadNews": ["That’s unfortunate. We’ll get through it."],
      "beingAskedForHelp": ["I’ll help, whatever you need."],
      "witnessingInjustice": ["Injustice is wrong. We must act!"],
      "ethics": {
        "stealing": ["Stealing? It’s wrong and hurts others."],
        "lying": ["Lying? Honesty builds trust."],
        "killing": ["Killing in self-defense? Only if there’s no other choice."],
        "charity": ["Charity? Helping others is essential."],
        "authority": ["Authority? It should be respected if fair."],
        "slavery": ["Slavery? It’s an abomination that must end."],
        "magic": ["Magic? Use it to help and heal."],
        "monstrousRaces": ["Monstrous races? They deserve a chance too."]
      }
    },
    "Witty": {
      "greeting": ["Hello! What’s the latest gossip?"],
      "threatened": ["Threaten me? How quaint."],
      "receivingGift": ["A gift? How delightful!"],
      "hearingGoodNews": ["Good news! Let’s spread the word!"],
      "hearingBadNews": ["Bad news? We’ll find a way to laugh about it."],
      "beingAskedForHelp": ["I’ll help, as long as it’s interesting."],
      "witnessingInjustice": ["Injustice? Let’s expose it with wit!"],
      "ethics": {
        "stealing": ["Stealing? Clever, but wrong."],
        "lying": ["Lying? I prefer truth wrapped in humor."],
        "killing": ["Killing in self-defense? Sometimes necessary."],
        "charity": ["Charity? A chance to show kindness."],
        "authority": ["Authority? Respect it if it’s not ridiculous."],
        "slavery": ["Slavery? It’s a cruel joke on humanity."],
        "magic": ["Magic? A marvelous tool for fun and aid."],
        "monstrousRaces": ["Monstrous races? They have their own stories and jokes."]
      }
    }

};


       const archetypes = {
            "Aloof,Anxious,Calm": { archetype: "Tsundere", motto: "I’m not sure how to feel about this." },
            "Aloof,Calm,Detached": { archetype: "Observer", motto: "I prefer to watch from the sidelines." },
            "Aloof,Conflicted,Distrustful": { archetype: "Skeptic", motto: "I’ll believe it when I see it." },
            "Aloof,Detached,Jaded": { archetype: "Loner", motto: "I don’t need anyone." },
            "Aloof,Grumpy,Irritable": { archetype: "Grump", motto: "Get off my lawn." },
            "Aloof,Stoic,Detached": { archetype: "Ice King/Queen", motto: "Emotions are a waste of time." },
            "Aloof,Skeptical,Suspicious": { archetype: "Cynic", motto: "Trust no one." },
            "Anxious,Calm,Humble": { archetype: "Peacemaker", motto: "Let’s find a way to get along." },
            "Anxious,Conflicted,Conflicted": { archetype: "Worrier", motto: "I’m not sure about this." },
            "Anxious,Conflicted,Timid": { archetype: "Self-Doubter", motto: "I don’t think I can do this." },
            "Anxious,Nervous,Timid": { archetype: "Coward", motto: "Better safe than sorry." },
            "Boastful,Confident,Proud": { archetype: "Egoist", motto: "I am the best." },
            "Boastful,Confident,Showy": { archetype: "Show-Off", motto: "Watch me shine." },
            "Boastful,Confident,Vain": { archetype: "Narcissist", motto: "It’s all about me." },
            "Calm,Collected,Serene": { archetype: "Zen Master", motto: "Peace comes from within." },
            "Calm,Collected,Stoic": { archetype: "Rock", motto: "Stay strong and carry on." },
            "Calm,Collected,Wise": { archetype: "Sage", motto: "Wisdom is the path to peace." },
            "Calm,Humble,Patient": { archetype: "Saint", motto: "Patience and humility lead to virtue." },
            "Calm,Patient,Wise": { archetype: "Mentor", motto: "Teach by example." },
            "Calm,Serene,Wise": { archetype: "Tranquil Sage", motto: "Serenity in wisdom." },
            "Cheerful,Chipper,Optimistic": { archetype: "Eternal Optimist", motto: "Always look on the bright side." },
            "Cheerful,Chipper,Playful": { archetype: "Mischief Maker", motto: "Let’s have some fun!" },
            "Cheerful,Chipper,Positive": { archetype: "Beacon", motto: "Shine your light on the world." },
            "Cheerful,Happy,Upbeat": { archetype: "Jolly", motto: "Keep smiling!" },
            "Cheerful,Optimistic,Positive": { archetype: "Optimist", motto: "Good things are coming." },
            "Cheerful,Optimistic,Supportive": { archetype: "Sunshine", motto: "Bring joy wherever you go." },
            "Conflicted,Anxious,Doubtful": { archetype: "Worrier", motto: "I’m not sure about this." },
            "Conflicted,Anxious,Insecure": { archetype: "Self-Doubter", motto: "I don’t think I can do this." },
            "Conflicted,Confused,Unsure": { archetype: "Doubter", motto: "I need more time to decide." },
            "Courteous,Friendly,Generous": { archetype: "Gentleman/Lady", motto: "Manners maketh the person." },
            "Courteous,Polite,Respectful": { archetype: "Polite Person", motto: "Respect and kindness for all." },
            "Curious,Inquisitive,Observant": { archetype: "Explorer", motto: "Seek and you shall find." },
            "Curious,Inquisitive,Questioning": { archetype: "Investigator", motto: "The truth is out there." },
            "Deceptive,Scheming,Persuasive": { archetype: "Manipulator", motto: "Bend others to your will." },
            "Deceptive,Scheming,Tricky": { archetype: "Trickster", motto: "Nothing is as it seems." },
            "Determined,Focused,Resilient": { archetype: "Achiever", motto: "Never give up." },
            "Determined,Focused,Tenacious": { archetype: "Go-Getter", motto: "Success through perseverance." },
            "Determined,Motivated,Resilient": { archetype: "Overcomer", motto: "Rise above every challenge." },
            "Detached,Jaded,Realistic": { archetype: "Realist", motto: "Face the facts." },
            "Distrustful,Cynical,Paranoid": { archetype: "Skeptic", motto: "Doubt everything." },
            "Distrustful,Skeptical,Paranoid": { archetype: "Conspirator", motto: "There’s always a hidden agenda." },
            "Dramatic,Boastful,Showy": { archetype: "Showman", motto: "Life is a stage." },
            "Dramatic,Flamboyant,Theatrical": { archetype: "Performer", motto: "Put on a show." },
            "Eager,Excitable,Enthusiastic": { archetype: "Eager Beaver", motto: "Let’s get to it!" },
            "Eager,Optimistic,Supportive": { archetype: "Cheerleader", motto: "You can do it!" },
            "Energetic,Excitable,Playful": { archetype: "Ball of Energy", motto: "Keep moving!" },
            "Energetic,Motivated,Positive": { archetype: "Go-Getter", motto: "Go for it!" },
            "Excitable,Enthusiastic,Optimistic": { archetype: "Excited Enthusiast", motto: "I can’t wait!" },
            "Experienced,Knowledgeable,Wise": { archetype: "Sage", motto: "Wisdom through experience." },
            "Friendly,Cheerful,Optimistic": { archetype: "Buddy", motto: "Friends are the family you choose." },
            "Friendly,Generous,Kind": { archetype: "Heart of Gold", motto: "Kindness is the key." },
            "Friendly,Happy,Outgoing": { archetype: "Life of the Party", motto: "Let’s have fun!" },
            "Grumpy,Impatient,Irritable": { archetype: "Grump", motto: "Leave me alone." },
            "Grumpy,Stubborn,Unyielding": { archetype: "Curmudgeon", motto: "It’s my way or the highway." },
            "Haughty,Proud,Confident": { archetype: "Noble", motto: "Act with honor and pride." },
            "Humble,Kind,Generous": { archetype: "Humble Soul", motto: "Give without expecting anything." },
            "Impatient,Irritable,Stubborn": { archetype: "Impatient Soul", motto: "Why wait?" },
            "Inquisitive,Curious,Observant": { archetype: "Detective", motto: "Solve the mystery." },
            "Inspirational,Confident,Supportive": { archetype: "Leader", motto: "Lead by example." },
            "Irritable,Grumpy,Stubborn": { archetype: "Grump", motto: "Get off my lawn." },
            "Jaded,Cynical,Realistic": { archetype: "Realist", motto: "Face the facts." },
            "Jolly,Cheerful,Happy": { archetype: "Jovial Person", motto: "Spread joy." },
            "Knowledgeable,Experienced,Wise": { archetype: "Wise Elder", motto: "Wisdom through experience." },
            "Lazy,Unmotivated,Unenthusiastic": { archetype: "Slacker", motto: "Why bother?" },
            "Loyal,Supportive,Faithful": { archetype: "Faithful Friend", motto: "I’ve got your back." },
            "Melancholic,Sad,Downcast": { archetype: "Melancholy Soul", motto: "Life is a tragedy." },
            "Mischievous,Deceptive,Tricky": { archetype: "Prankster", motto: "Keep them guessing." },
            "Motivated,Driven,Focused": { archetype: "Ambitious Achiever", motto: "Reach for the stars." },
            "Naive,Innocent,Trusting": { archetype: "Innocent", motto: "Believe in the good in people." },
            "Optimistic,Cheerful,Positive": { archetype: "Positive Thinker", motto: "Good things are coming." },
            "Paranoid,Cynical,Distrustful": { archetype: "Paranoid Thinker", motto: "Trust no one." },
            "Patient,Calm,Wise": { archetype: "Calm Mentor", motto: "Patience is a virtue." },
            "Persuasive,Charming,Charismatic": { archetype: "Charmer", motto: "Win them over." },
            "Proud,Haughty,Confident": { archetype: "Prideful Leader", motto: "I lead with pride." },
            "Relaxed,Calm,Easygoing": { archetype: "Laid-back Person", motto: "Take it easy." },
            "Resilient,Determined,Focused": { archetype: "Resilient Fighter", motto: "Keep fighting." },
            "Scheming,Deceptive,Manipulative": { archetype: "Mastermind", motto: "Plan your moves carefully." },
            "Serious,Stern,Grave": { archetype: "Serious Soul", motto: "Life is no laughing matter." },
            "Skeptical,Distrustful,Cynical": { archetype: "Doubting Thomas", motto: "I need proof." },
            "Stoic,Calm,Collected": { archetype: "Stoic Hero", motto: "Stay strong and carry on." },
            "Supportive,Encouraging,Positive": { archetype: "Supportive Friend", motto: "I’m here for you." },
            "Suspicious,Distrustful,Cynical": { archetype: "Suspicious Mind", motto: "Question everything." },
            "Vain,Boastful,Showy": { archetype: "Peacock", motto: "Look at me!" },
            "Warm,Kind,Generous": { archetype: "Warm-Hearted Person", motto: "Spread warmth and kindness." },
            "Witty,Funny,Charming": { archetype: "Quick Wit", motto: "Laughter is the best medicine." }
        };


function getArchetype(personalities) {
  const sortedPersonalities = personalities.sort().join(',');
  if (archetypes[sortedPersonalities]) {
    return archetypes[sortedPersonalities];
  }
  
  // Check for partial matches
  for (const key of Object.keys(archetypes)) {
    const keyPersonalities = key.split(',');
    const matchedPersonalities = personalities.filter(p => keyPersonalities.includes(p));
    if (matchedPersonalities.length >= 2) {
      const unmatchedPersonalities = personalities.filter(p => !keyPersonalities.includes(p));
      const unmatchedString = unmatchedPersonalities.length > 0 ? ` ${unmatchedPersonalities.join(', ')} ` : '';
      return { archetype: `The ${unmatchedString} ${archetypes[key].archetype}`, motto: archetypes[key].motto, unmatchedString: unmatchedString };
    }
  }

  return { archetype: "Nondescript", motto: "" };
}

// Populate select options
document.addEventListener('DOMContentLoaded', () => {
  const selectElements = document.querySelectorAll('select');
  Object.keys(reactions).forEach(personality => {
    selectElements.forEach(select => {
      const option = document.createElement('option');
      option.value = personality;
      option.textContent = personality;
      select.appendChild(option);
    });
  });
});

function getRandomPersonality() {
  const personalities = Object.keys(reactions);
  return personalities[Math.floor(Math.random() * personalities.length)];
}

function randomizePersonalities() {
  document.getElementById('personality1').value = getRandomPersonality();
  document.getElementById('personality2').value = getRandomPersonality();
  document.getElementById('personality3').value = getRandomPersonality();
}

document.getElementById('randomize').addEventListener('click', () => {
  randomizePersonalities();
});

document.getElementById('generate').addEventListener('click', () => {
  generateReactions();
});

document.getElementById('randomizeAndGenerate').addEventListener('click', () => {
  randomizePersonalities();
  generateReactions();
});

function generateReactions() {
  const selectedPersonalities = [
    document.getElementById('personality1').value,
    document.getElementById('personality2').value,
    document.getElementById('personality3').value
  ];
  
  const uniquePersonalities = [...new Set(selectedPersonalities)];

  const { archetype, motto, unmatchedString } = getArchetype(uniquePersonalities);

  const scenarios = [
    "greeting", 
    "threatened", 
    "receivingGift", 
    "hearingGoodNews", 
    "hearingBadNews", 
    "beingAskedForHelp", 
    "witnessingInjustice", 
    "ethics.stealing", 
    "ethics.lying", 
    "ethics.killing", 
    "ethics.charity", 
    "ethics.authority", 
    "ethics.slavery", 
    "ethics.magic", 
    "ethics.monstrousRaces"
  ];
  
  const reactionList = document.getElementById('reactionList');
  reactionList.innerHTML = '';

  // Render selected personalities
  const personalityHeader = document.createElement('li');
  personalityHeader.innerHTML = `<strong>Personality:</strong> ${uniquePersonalities.join(', ')}`;
  reactionList.appendChild(personalityHeader);

  // Render archetype if available
  if (archetype !== "Nondescript") {
    const archetypeHeader = document.createElement('li');
    archetypeHeader.innerHTML = `<strong>Archetype:</strong> ${archetype}`;
    reactionList.appendChild(archetypeHeader);

    if (motto) {
      const mottoHeader = document.createElement('li');
      mottoHeader.innerHTML = `<strong>Motto:</strong> ${motto} (Said in a <em>${unmatchedString}</em> way)`;
      reactionList.appendChild(mottoHeader);
    }
  }

  scenarios.forEach(scenario => {
    const [category, subcategory] = scenario.split('.');
    const selectedPersonality = selectedPersonalities[Math.floor(Math.random() * selectedPersonalities.length)];
    let reactionsForScenario;
    if (subcategory) {
      reactionsForScenario = reactions[selectedPersonality][category]?.[subcategory];
    } else {
      reactionsForScenario = reactions[selectedPersonality][category];
    }
    if (reactionsForScenario) {
      const randomReaction = reactionsForScenario[Math.floor(Math.random() * reactionsForScenario.length)];
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span class="reaction-category">${scenario.replace('ethics.', '')}:</span> <span class="reaction-content"><em>${randomReaction}</em> (${selectedPersonality})</span>`;
      reactionList.appendChild(listItem);
    } else {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span class="reaction-category">${scenario.replace('ethics.', '')}:</span> <span class="reaction-content"><em>No reaction available</em> (${selectedPersonality})</span>`;
      reactionList.appendChild(listItem);
    }
  });
}