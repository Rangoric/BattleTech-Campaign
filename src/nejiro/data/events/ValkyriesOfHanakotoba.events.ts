import { eDetailType } from "@/nejiro/IDetails";
import { IEvent } from "../../IEvents";

export const vohEvents: IEvent[] = [
  {
    time: "3069 July",
    title: "Mission 95",
    summary: "Bug Hunt",
    involvedPeople: [
      "Ambrosia Or'lient",
      "Ragnar Icetoff",
      "Orchid Or'lient",
      "Tryna Icetoff",
      "Akira Or'lient",
      "Indigo Or'lient",
    ],
    mentionedPeople: [],
    outsideLinks: [],
    referencePages: [{ name: "Mission 95", url: "/game-day-2025-01-05" }],
  },
  {
    time: "3069 July",
    title: "Mission 94",
    summary: "Training Mission",
    involvedPeople: [
      "Jasmine Or'lient",
      "Clover Or'lient",
      "Armia Kazutomo",
      "Amber Or'lient",
    ],
    mentionedPeople: [],
    outsideLinks: [],
    referencePages: [{ name: "Mission 94", url: "/game-day-2024-11-10" }],
  },
  {
    time: "3069 July",
    title: "Mission 93",
    summary: "Assisting prisoner escort",
    involvedPeople: [
      "Orchid Or'lient",
      "Tryna Icetoff",
      "Clover Or'lient",
      "Akira Or'lient",
      "Amber Or'lient",
    ],
    mentionedPeople: [],
    outsideLinks: [],
    referencePages: [{ name: "Mission 93", url: "/game-day-2024-10-13" }],
  },
  {
    time: "3069 July",
    title: "Gulia & Mieyo talk about ECM Crystals",
    summary:
      "Gulia and Mieyo talk about the crystals found in the caverns and the ECM they produce",
    involvedPeople: ["Gulia", "Mieyo"],
    mentionedPeople: ["Jasmine Or'lient"],
    outsideLinks: [
      {
        name: "Forum Post",
        url: "https://bg.battletech.com/forums/index.php?topic=86040.msg2033591#msg2033591",
      },
    ],
    referencePages: [],
    details: [
      {
        type: eDetailType.Conversation,
        speaker: "Gulia",
        text: "I will have hardwired sensors placed in the area that the bandits were in. Commander Or'lient's idea is sound.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Mieyo",
        text: "I will sign off on it. What are you going to do so we will not have to send people to jump every time an animal or hiker is in the area?",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Gulia",
        text: "I will have mix IR, EM and seismic. I feel the mix is needed due to the tech our foes have.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Mieyo",
        text: "Very good have it done.",
      },
    ],
  },
  {
    time: "3069 July",
    title: "Jasmine & People chat about the ECM Crystals",
    summary:
      "Jasmine, Daisy, Alphonse, and Ulam chat about the crystals found in the caverns and the ECM they produce",
    involvedPeople: [
      "Jasmine Or'lient",
      "Daisy Or'lient",
      "Alphonse Barbeau",
      "Ulam",
    ],
    mentionedPeople: ["Dahlia Or'lient"],
    outsideLinks: [
      {
        name: "Forum Post",
        url: "https://bg.battletech.com/forums/index.php?topic=86040.msg2033558#msg2033558",
      },
    ],
    referencePages: [],
    details: [
      "Jasmine's Office with Daisy, Alphonse, and Ulam",
      "All in Swedish",
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "So, mom, did you know dad could curse in at least 4 languages? I say at least 4, only because the troops with him didn't know what half of them were, or what language.",
      },
      "Alphonse just gives an angry smile, not saying a thing. He and Jasmine already had a short chat about this, no trouble, just to remember to try and use a language that people actually know.",
      {
        type: eDetailType.Conversation,
        speaker: "Daisy Or'lient",
        text: "I taught him well. The reason for all that cursing is why we are here though isn't it?",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Ulam",
        text: "Those crystals, I want one. ECM at twice the range of the Schiltron. Might be from how large they are below the ground, but just over a third of a kilometer? And they completely neutered Alphonse?",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Alphonse Barbeau",
        text: "(French) Nothing neuters me you...",
      },
      "Daisy kicks his foot",
      {
        type: eDetailType.Conversation,
        speaker: "Alphonse Barbeau",
        text: "(Swedish) The HQ vehicle was ill suited to being deployed there",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "(looking surprised at that statement) No, it was perfect. I didn't hear any reports of ECCM in the units deploying being any help, and our Daimyo was regulated to being a mobile landmark. But, the cops that we saw, they had no lights, no line of sight and moved in tandem anyway. Not one of them acted out or mistimed their move.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Ulam",
        text: "So I can't strap a crystal to the back of a mech and make them into a nice EW toy?",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "Yeah, you did read that they are unstable and are likely to explode?",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Ulam",
        text: "It's a joke, we obviously take a truck with a crystal in the back, program a course to take, then follow behind.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "Or, you talk to people and see if they noticed the same things about the ECM and the behaviour of the cops. Dahlia can help until your Japanese is better.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "(to Daisy) And you ask around about the crystals. If someone is studying them, I want to help. If someone needs help with experiments, and we can confirm that it won't be unabled to be deployed if needed, we can let Alphonse help with the Daimyo. The only ECM we have is on the Schiltron, but that's off for training, but if that can help, we can talk when they get back, or buying an ECM piece if needed is also an option. They are expensive, but those crystals keep me up at night. Too much is unknown about them, and they fascinate me.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Daisy Or'lient",
        text: "I'll start with the other commanders in the GSF and our contacts specific to GSF operations. Then I will reach out from there. That way at least when I start asking, I can get their thoughts, and any more information before I run it up the flagpole as it were. I will make sure to start with it being a talk about the mission, so only people who know about it will be asked.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Alphonse Barbeau",
        text: "You had me in here just to let me know my pain will be useful eh.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "All wins should be celebrated. Especially when that win is connected to pain. First time deployed, second deployment with the GSF and we field a unit that might as well have been a toy truck? Yeah, that sucks, but I think seeing how effective these crystals are was just as important",
      },
      "",
      "Game Effect Summary:",
      "The crystals do actually keep popping up in my head.",
      "Ulam and Dahlia will casually (when possible) try and see if others noticed the coordinated behaviour of the mechs in that mission and the ECM pain we felt. Might not happen, but that parts order request is going to be getting posted by Devondra so chatter about that might be a good time to confirm things.",
      "Daisy will ask others about the crystals and if they know of any work to study them or investigate them. She will start with GSF commanders because we want them to KNOW that we are inquiring about this. After that going up to whomever gave that mission and other official contacts for the GSF that would know of or get reports of the mission.",
    ],
  },
  {
    time: "3069 July",
    title: "Jasmine & Kem's End of July Talk",
    summary:
      "Jasmine and Kem chat about short term and long term plans on Nejiro",
    involvedPeople: ["Jasmine Or'lient", "Kem Icetoff", "Dahlia Or'lient"],
    mentionedPeople: ["Ulam", "Karenth Icetoff"],
    details: [
      "In Jasmine's Office",
      "Kem and Jasmine are speaking Japanese",
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "So, language training seems to be going well. Ulam is being Ulam. But at least he agreed to learn enough to be able to name parts he needs in Japanese.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Kem Icetoff",
        text: "I've been asking around about that. Dahlia, the one that makes that repository we use, might be able to help there. Ambrosia has had her training in mechs for years, but she has actually been purposely breaking things in a particular pattern and way, then insisting she help fix it.",
      },
      "Jasmine raises an eyebrow and Kem smiles.",
      {
        type: eDetailType.Conversation,
        speaker: "Kem Icetoff",
        text: "I'll go get her. Don't worry I'll tell her nothing about why she's here.",
      },
      "Kem leaves, going to get Dahlia. They return not too long later. Jasmine occupies herself looking at a certain set of repair reports.",
      {
        type: eDetailType.Conversation,
        speaker: "Dahlia Or'lient",
        text: "(in Swedenese) So Aunt Jas, I hear you are looking for me.",
      },
      "Jasmine looks her in the eye and just waits a moment.",
      {
        type: eDetailType.Conversation,
        speaker: "Dahlia Or'lient",
        text: "(in Japanese) Sorry, habit. What's up?",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "I see that you keep breaking the mechs you drive. Kem says there is a pattern. I think electronics are just fragile. But the amount of time you have spent repairing what you break, that's interesting.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Kem Icetoff",
        text: "Based on what people say, since you don't actually work for us, you have spent more time in there than just about anyone aside from the true gearheads, or pretty much Ulam.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Dahlia Or'lient",
        text: "Oh, Aunt Kem, that's only because people notice when I'm there because of Mom.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "(smiles) Dahlia Or'lient, this is an official interview. We aren't back home, and we aren't stuck in a spaceship anymore. Security and regulations on this planet won't allow us to do as you have been doing. In fact, if we want to stay here long term, I'll be talking with all family members not officially working for us.",
      },
      "Kem tilts her head, Dahlia seems a bit confused.",
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "As for you, we are currently looking to hire an apprentice, or a Junior MechTech, to work with Ulam.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Dahlia Or'lient",
        text: "Do I have to stop piloting a mech?",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "Ulam doesn't by his own choice. We don't actually have a real mech for you to pilot at this time.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Dahlia Or'lient",
        text: "I'm glad I won't have to turn you down.",
      },
      "After sorting out some details, Dahlia leaves.",
      {
        type: eDetailType.Conversation,
        speaker: "Kem Icetoff",
        text: "So, that's a change that won't really change much. So... What's this about staying long term? Aside from the relocation project itself, we have been working for a bit then moving on. So, what's different this time?",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "You didn't read the contract. We are signed up for a year. In the research I did ahead of time, at least 1 member of the GSF has already become a citizen, with land holdings. Another runs a BA repair shop. Another has a restaurant. Another has a blasted Gauss ammo plant. People don't come here to visit. Look at the pictures attached to mission reports. There is bound to be a civil war at some point, or WoB nonsense. But that can happen anywhere. What we have here, right now, is a lot of people who want to stay, and, to put it rudely, hate the same people we hate. We don't know nearly everything about this place, or if we are even on the right side of whatever seems to be brewing here. But I'm so tired of running and the scenery here is to die for.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Kem Icetoff",
        text: "I like where this is going. Or not going, actually.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "Oh and you are the first that will be taking the Advanced Infantry Training course.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Kem Icetoff",
        text: "Dafuq? That's...",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "I need you to do this so that others know we are serious about training. You will be shipping out with Karenth ASAP.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Kem Icetoff",
        text: "Are you kidding me? After all that heartfelt talk, you send me to training?",
      },
      "Jasmine holds up her finger for Kem to wait.",
      {
        type: eDetailType.Conversation,
        speaker: "Jasmine Or'lient",
        text: "And when you get back, you will be looking into that ceremony you've wanted. After the month and a half you are gone, I plan to have some things in motion, and either we can hold the ceremony and stay longer than the year, or we can start making plans for were to go. But there are kids and families we just can't expect them to keep moving. I plan to get an opinion from everyone. I already know your answer.",
      },
      {
        type: eDetailType.Conversation,
        speaker: "Kem Icetoff",
        text: "AIT training? Yeah consider that done. Karenth and I will have plenty to do during the downtime while training",
      },
      "Kem dances out of the room after giving Jasmine a kiss on the cheek.",
      "",
      "Game Effects: Dahlia is now a Junior MechTech. Kem & Karenth are taking Advanced Infantry Training. Jasmine is planning to stay on Nejiro long term.",
    ],
    outsideLinks: [
      {
        name: "Post on BG Forums",
        url: "https://bg.battletech.com/forums/index.php?topic=86040.msg2033312#msg2033312",
      },
    ],
    referencePages: [],
  },
  {
    time: "3069 July",
    title: "Jasmine's July Memo",
    summary: "Ambrosia's bored, Kem loses a bet",
    involvedPeople: ["Jasmine Or'lient"],
    mentionedPeople: ["Ambrosia Or'lient", "Kem Icetoff"],
    details: [
      {
        type: eDetailType.QuoteBlock,
        title: "Jasmine's Memo",
        text: `So welcome to what could be our new home. I'm working with other senior staff to build out a repository of information about everything from what you can get the best Gyro, to where you can have a nice relaxing weekend.
The official language on this planet is Japanese, and so as of today we will also be taking this as our shared language instead of Swedish. I am recommending that if you don't know Japanese, that you start learning, because that nice relaxing weekend? Won't be so relaxing when you can't talk to anyone. Any lessons on Japanese or planetary etiquette are available and can be taken as part of your training.
And on the topic of training, I want us to get to 33% in training, with 2-3 GSF capable deployments. Language and etiquette will not take units out of action so get that in early. Also, while I find out the finer details of available training, we will be having 1 movie a day of un subtitled local Japanese cinema playing in the rec room. Even those of us who know Japanese should take part in language training as the specific version of Japanese might be different.
After a meeting with the GSF, it is mostly agreed that Draconis Combine C3 units will be the standard. So those interacting with them might want a primer on that.
About the previous escort, Ambrosia said 'The only good time to ambush this convoy is before or after it happens.
In related news Kem will filling in as our Jukebox during on base lunches for a week. Have those requests ready, and don't forget to pick what language you want to hear it in.`,
      },
      "Game Effects: All VoH personnel are training in local Japanese language and customs. Ambrosia made a bet with Kem that there wouldn't be anything attacking the convoy, and Kem lost so will spend a week singing random songs in random languages. Starting to transition C3 units to DC instead of Rasalhague.",
    ],
    outsideLinks: [
      {
        name: "Jasmine's July Memo",
        url: "https://bg.battletech.com/forums/index.php?topic=86040.msg2033016#msg2033016",
      },
    ],
    referencePages: [],
  },
  {
    time: "3069 June",
    title: "Monthly Report - End of June 3069",
    summary: "Made some money, made some choices",
    involvedPeople: [],
    mentionedPeople: [],
    outsideLinks: [],
    referencePages: [
      { name: "Monthly Report - June 3069", url: "/monthly-report-3069-06" },
    ],
  },
  {
    time: "3069 June",
    title: "Mission 92",
    summary: "Escort mission",
    involvedPeople: [
      "Jasmine Or'lient",
      "Clover Or'lient",
      "Akira Or'lient",
      "Indigo Or'lient",
    ],
    mentionedPeople: [],
    outsideLinks: [],
    referencePages: [{ name: "Mission 92", url: "/game-day-2024-09-15" }],
  },
  {
    time: "3069 June",
    title: "Mission 91",
    summary: "Investigating some natural ECM & Caverns",
    involvedPeople: [
      "Jasmine Or'lient",
      "Marceau Barbeau",
      "Akira Or'lient",
      "Alphonse Barbaue",
    ],
    mentionedPeople: [],
    outsideLinks: [],
    referencePages: [{ name: "Mission 91", url: "/game-day-2024-08-11" }],
  },
  {
    time: "3069 June",
    title: "Mission 90",
    summary: "Chasing some fleeing bandits",
    involvedPeople: [
      "Ambrosia Or'lient",
      "Orchid Or'lient",
      "Ragnar Icetoff",
      "Tryna Icetoff",
      "Kem Icetoff",
      "Karenth Icetoff",
      "Iris Or'lient",
      "Brant Crowley",
    ],
    mentionedPeople: [],
    outsideLinks: [],
    referencePages: [{ name: "Mission 90", url: "/game-day-2024-07-07" }],
  },
  {
    time: "3069 June",
    title: "The Valkyries of Hanakotoba arrive on Nejiro",
    summary: "They arrive on Nejiro and are setup at Camp Haken",
    involvedPeople: ["Jasmine Or'lient"],
    mentionedPeople: [],
    outsideLinks: [
      {
        name: "Introduction of VoH",
        url: "https://bg.battletech.com/forums/index.php?topic=73440.msg2013968#msg2013968",
      },
    ],
    referencePages: [],
  },
];
