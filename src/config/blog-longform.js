const MIN_TARGET_WORDS = 1400;
const MIN_EXPANSION_THRESHOLD = 500;

const TOPIC_CONFIG = {
    puppy: {
        label: 'puppy behavior and early structure',
        challenge: 'owners accidentally reward chaos because the dog is still young and cute',
        plan: 'crate routines, bite interruption, leash work, short reps, and enforced rest',
    },
    reactive: {
        label: 'reactivity and public control',
        challenge: 'owners stay too close to triggers and keep rehearsing the blow-up',
        plan: 'distance management, leash handling, place work, neutrality reps, and better exits',
    },
    offleash: {
        label: 'off-leash reliability and recall',
        challenge: 'owners give freedom before the dog understands accountability at distance',
        plan: 'long-line work, e-collar conditioning, recall pressure, and proofing around real distractions',
    },
    boarding: {
        label: 'boarding, separation, and calm structure away from home',
        challenge: 'owners assume more activity will solve a dog that has never learned how to settle',
        plan: 'kennel structure, calmer handoffs, decompression, and predictable daily handling',
    },
    aggression: {
        label: 'aggression, fear, and safe handling',
        challenge: 'owners wait too long or rely on sympathy without installing structure',
        plan: 'clear boundaries, obedience, safer routines, public accountability, and direct handler coaching',
    },
    default: {
        label: 'obedience and real-world follow-through',
        challenge: 'owners negotiate with behavior they already know is becoming a problem',
        plan: 'thresholds, leash mechanics, place command work, and consistent daily follow-through',
    },
};

function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
}

function inferTopic(post) {
    const source = `${post.title} ${post.excerpt} ${post.slug}`.toLowerCase();
    if (source.includes('puppy') || source.includes('biting') || source.includes('housebreaking')) return 'puppy';
    if (source.includes('reactive') || source.includes('threshold') || source.includes('doorbell') || source.includes('counter')) return 'reactive';
    if (source.includes('off-leash') || source.includes('recall') || source.includes('e-collar') || source.includes('ecollar')) return 'offleash';
    if (source.includes('boarding') || source.includes('crate') || source.includes('separation') || source.includes('daycare')) return 'boarding';
    if (source.includes('aggression') || source.includes('resource guarding') || source.includes('guarding')) return 'aggression';
    return 'default';
}

function buildSection(title, body) {
    return `**${title}**\n\n${body}`;
}

function uniqueSections(post, relatedServices) {
    const topic = TOPIC_CONFIG[inferTopic(post)] || TOPIC_CONFIG.default;
    const serviceNames = relatedServices.map((service) => service.label).slice(0, 3);
    const serviceLine = serviceNames.length > 0 ? serviceNames.join(', ') : 'Dog Training, Board & Train, and Obedience Training';
    const titleLower = post.title.replace(/[?!.:]/g, '').toLowerCase();

    return [
        buildSection(`Why ${titleLower} keeps showing up in normal life`, `${post.excerpt} This issue usually follows owners into the walk, the front door, the crate, the car, or the quiet parts of the house where the dog has too much room to keep repeating the same pattern. The problem is rarely random. It usually grows because ${topic.challenge}. When I look at a case like this, I am not only looking at the loud moment. I am looking at what the dog practiced the hour before it, the day before it, and the month before it.`),
        buildSection(`What I tighten up first when I see ${topic.label}`, `The first job is to remove the loopholes. That means tightening up ${topic.plan}. Owners usually want the dramatic fix first, but real progress starts when the dog understands the new picture in the boring parts of the day. If the dog can break the rules at the threshold, drag on the first ten minutes of the walk, or ignore a simple boundary in the house, they will carry that same attitude into the bigger problem too.`),
        buildSection(`How I would handle this with a Shepards K9 client`, `I do not try to talk a dog out of behavior like this. I show the dog what changes, then I repeat it until the new response is clearer than the old one. That is where programs like ${serviceLine} matter. Some owners need direct coaching and homework. Some need Eduardo doing the heavy lifting first and then handing the work back over. The right service depends on how rehearsed the issue is, how much control the owner has today, and how quickly the dog spirals once pressure shows up.`),
        buildSection(`The mistake owners keep making with ${titleLower}`, `Most owners are not failing because they do not care. They are failing because they keep changing the rules or they wait until the dog is already fully committed to the bad decision. Once the dog is exploding, chasing, barking, guarding, or ignoring the handler completely, the teaching window has mostly closed. Good handling starts earlier. It starts with body language, threshold control, leash mechanics, and not giving the dog permission to drift into the same problem picture again.`),
        buildSection(`What I want you to do next if this sounds like your dog`, `If this article describes your dog closely, stop collecting more bad reps. Write down where the issue shows up, what the dog does right before it, and whether you can interrupt it cleanly today. That will tell us whether this is best solved through ${serviceLine} or whether the dog needs a more intensive reset. Either way, the answer is not more guessing. It is better structure, better timing, and a program that matches the dog in front of you.`),
    ];
}

export function buildEduardoLongformArticle(post, relatedServices = []) {
    const baseContent = post.content.trim();
    if (countWords(baseContent) >= MIN_EXPANSION_THRESHOLD) {
        return baseContent;
    }

    const sections = uniqueSections(post, relatedServices);
    let article = [baseContent, ...sections].join('\n\n');
    const extraSections = [
        buildSection(`Why owners get stuck on ${post.title.replace(/[?!.:]/g, '')}`, `Owners usually do not stay stuck because they are lazy. They stay stuck because the routine feels normal, the dog gets a few wins every day, and nobody has changed the structure enough to force a new answer. Eduardo looks for the point where the old pattern is still getting paid. That is where the real fix starts.`),
        buildSection(`What better follow-through looks like here`, `The owner does not need to become a robot. The owner does need to stop changing the standard every other day. If the dog is held accountable when it matters, the picture gets cleaner fast. If the owner gets soft the second the dog protests, the same behavior comes right back.`),
        buildSection(`How this connects to the right training program`, `Not every case needs the same level of structure. Some dogs need direct owner coaching and repetition at home. Some need a stronger reset before the owner can maintain anything. That is why Eduardo points owners toward the service that actually matches the problem instead of forcing every dog into the same plan.`),
        buildSection(`What I would want to know before giving you a recommendation`, `I would want to know where the dog fails, how intense the behavior is, whether there is bite risk, how much control you have today, and whether the dog can still think once pressure shows up. Those details matter more than the label on the problem. They tell me how much structure the case actually needs.`),
    ];

    let extraIndex = 0;
    while (countWords(article) < MIN_TARGET_WORDS && extraIndex < extraSections.length) {
        article += `\n\n${extraSections[extraIndex]}`;
        extraIndex += 1;
    }

    return article;
}
