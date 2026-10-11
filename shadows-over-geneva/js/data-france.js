// FRANCE campaign — the player advises successive French governments.
// motive = "Why France chose this": the reasoning behind the historical decision.
window.SCENARIOS = window.SCENARIOS || {};
window.SCENARIOS.france = [
{
  id: 'parisF', lv: 'both', date: 'April 1919', title: 'Security on the Rhine',
  ldr: 'clemenceau', speaker: 'wilson',
  said: 'You cannot cut a nation in pieces, Monsieur Clemenceau. Germany must be able to live.',
  brief: 'Clemenceau and Marshal Foch want the Rhineland, the German land west of the Rhine, turned into a separate state so that Germany can never again invade France. Northern France lies in ruins, and 1.4 million French soldiers are dead. Wilson and Lloyd George refuse to break up Germany. To win French agreement, they offer something else: treaties in which Britain and America promise to defend France if Germany attacks.',
  ask: 'What does Clemenceau accept?',
  opts: [
    { t: 'Insist on a separate Rhineland state, or walk out.', x: 'Clemenceau knew France could not afford to break with Britain and America. Their support was France’s best guarantee.' },
    { t: 'A demilitarised Rhineland occupied for 15 years, the Saar coal mines, and Anglo-American guarantees.' },
    { t: 'Accept Wilson’s idea of a mild peace with no reparations.', x: 'No French government could have survived that. France wanted Germany to pay for the devastation.' },
    { t: 'Annex the Saar outright.', a: true, x: 'France got the Saar mines for 15 years, with a vote at the end, not annexation.' }
  ],
  ans: 1,
  out: 'The Treaty of Versailles demilitarised the Rhineland and put it under Allied occupation for 15 years. France took Alsace-Lorraine back and got the Saar coal mines, with the Saar itself run by the League. Britain and the USA signed guarantees, but the US Senate never ratified the treaty, and the British guarantee depended on the American one. France was left without the protection it had been promised.',
  head: 'CLEMENCEAU WINS THE RHINE — ON PAPER',
  fx: { tens: 4, mark: [{ id: 'versailles', kind: 'deal', label: 'Versailles 1919' }] },
  focus: [4, 49, 6],
  exam: 'France thought the treaty too soft; Germany thought it too harsh. That is a good way into “Was the treaty fair?”.',
  hist: 'Many French people felt cheated: they believed they had won the war but lost the peace. The collapse of the guarantee shaped French policy for twenty years.',
  motive: 'France had been invaded twice in fifty years and had a smaller, slower-growing population than Germany. Security against a German revival was its overwhelming aim.'
},
{
  id: 'alliances', lv: 'a', date: 'February 1921', title: 'Allies in the East',
  ldr: 'briand', speaker: 'pilsudski',
  said: 'Poland will stand with France against Germany. And against the Bolsheviks.',
  brief: 'The Anglo-American guarantee has collapsed, and Russia, France’s pre-war ally, is now Bolshevik. France needs friends who can threaten Germany from the east. The new states created in 1919, Poland and Czechoslovakia, fear Germany as much as France does. Poland is in a border dispute with Lithuania over Vilna.',
  ask: 'What does France do?',
  opts: [
    { t: 'Rely entirely on the League to protect France.', x: 'France doubted the League could protect anyone without the USA and without an army.' },
    { t: 'Sign an alliance with Poland, and later with Czechoslovakia.' },
    { t: 'Seek an alliance with Bolshevik Russia.', x: 'In 1921 the Bolsheviks were France’s enemy. They had cancelled the Tsar’s debts, much of them owed to French savers.' },
    { t: 'Make a deal with Germany to share Europe.', x: 'France’s whole policy was to contain Germany, not partner with it.' }
  ],
  ans: 1,
  out: 'France signed an alliance with Poland in February 1921 and a treaty with Czechoslovakia in 1924, with links to Romania and Yugoslavia. These eastern alliances explain why France backed Poland over Vilna, and why Czechoslovakia mattered so much in 1938.',
  head: 'PARIS AND WARSAW SEAL ALLIANCE',
  fx: { tens: 2, mark: [{ id: 'warsaw', kind: 'deal', label: 'Franco-Polish alliance 1921' }, { id: 'vilna', kind: 'fail', label: 'Vilna 1920' }] },
  focus: [12, 50, 4],
  exam: 'Explains French motives in League crises such as Vilna: France would not punish its ally Poland.',
  hist: 'Historians note these alliances were only useful if France was willing to attack Germany to help its allies, which by the 1930s it was not.',
  motive: 'Without Russia, Britain or America, France needed allies who could threaten Germany from the east. Self-interest in these alliances sometimes came before loyalty to the League.'
},
{
  id: 'ruhrF', lv: 'both', date: 'January 1923', title: 'Collecting in Coal',
  ldr: 'poincare', speaker: 'cuno',
  said: 'Germany cannot pay. France will only make it poorer.',
  brief: 'Germany has fallen behind on deliveries of timber and coal owed as reparations. France has to repay its own war debts to Britain and America, and its devastated north still needs rebuilding. Poincaré believes Germany is dodging payment on purpose. Britain disagrees and will not help.',
  ask: 'What does Poincaré do?',
  opts: [
    { t: 'Accept the delay and wait.', x: 'Poincaré believed that giving way would encourage Germany to tear up the rest of Versailles.' },
    { t: 'Occupy the Ruhr with Belgium, and take coal and goods by force.' },
    { t: 'Ask the League to enforce payment.', x: 'Reparations were handled by the Reparations Commission, not the League, and France wanted direct action.' },
    { t: 'Cancel reparations in exchange for a German border guarantee.', a: true, x: 'That kind of bargain came later, at Locarno. In 1923 France wanted payment.' }
  ],
  ans: 1,
  out: 'French and Belgian troops occupied the Ruhr on 11 January 1923. Germany answered with passive resistance and printed money, and hyperinflation followed. France got some coal, but at high cost, and the franc itself fell in value. Britain and America saw France as the aggressor.',
  head: 'FRENCH TROOPS IN ESSEN',
  fx: { tens: 10, auth: -4, own: { ruhr: 'fr' }, mark: [{ id: 'ruhr', kind: 'war', label: 'Ruhr 1923' }] },
  focus: [5, 50, 6],
  exam: 'The Ruhr shows French determination to enforce Versailles, and the damage it did to relations with Britain.',
  hist: 'Sally Marks argues that France was right that Germany could pay. Others see the occupation as a costly failure that left France isolated.',
  motive: 'France needed reparations to pay its own debts and rebuild, and feared that letting Germany off would unravel the whole treaty. Its leaders also distrusted Germany’s claims of poverty.'
},
{
  id: 'dawesF', lv: 'a', date: 'August 1924', title: 'Leaving the Ruhr',
  ldr: 'herriot', speaker: 'stresemann',
  said: 'Leave the Ruhr, Monsieur Herriot, and Germany will pay what it can.',
  brief: 'The Ruhr occupation has cost France dearly. The franc has fallen sharply, and Poincaré lost the May 1924 election. The new Prime Minister, Édouard Herriot, faces the Dawes Plan: reparations rescheduled, American loans for Germany, and an end to the occupation. Britain and America both support it.',
  ask: 'What does Herriot do?',
  opts: [
    { t: 'Reject the plan and stay in the Ruhr.', x: 'France could not afford to stay isolated, and it needed American and British financial support.' },
    { t: 'Accept the Dawes Plan and agree to leave the Ruhr within a year.' },
    { t: 'Accept only if Britain signs an alliance with France.', x: 'Herriot wanted British guarantees, but did not make them a condition of Dawes.' },
    { t: 'Annex the Ruhr.', x: 'This was never considered. Britain and America would never have accepted it.' }
  ],
  ans: 1,
  out: 'At the London Conference in August 1924 France accepted the Dawes Plan. French and Belgian troops left the Ruhr by August 1925. Herriot also backed the Geneva Protocol, hoping for collective security instead.',
  head: 'FRANCE TO QUIT THE RUHR',
  fx: { tens: -8, auth: 4, own: { ruhr: null }, mark: [{ id: 'ruhr', kind: 'deal', label: 'Ruhr evacuated 1925' }] },
  focus: [5, 50, 6],
  exam: 'Shows France moving from enforcing Versailles by force to co-operation: the start of the “Locarno spirit”.',
  hist: 'Some historians see 1924 as the moment France lost the power to enforce Versailles on its own.',
  motive: 'France could not go on alone. Its money and its relations with Britain and America mattered more than holding the Ruhr.'
},
{
  id: 'locarnoF', lv: 'both', date: 'October 1925', title: 'The Spirit of Locarno',
  ldr: 'briand', speaker: 'chamberlainA',
  said: 'For the Polish Corridor no British government ever will or ever can risk the bones of a British grenadier.',
  saidReal: true,
  brief: 'Germany offers to accept its border with France permanently. Britain and Italy will guarantee it. But Britain will not guarantee Germany’s eastern borders, so France’s allies Poland and Czechoslovakia get only arbitration treaties. Aristide Briand, the Foreign Minister, believes reconciliation with Germany is France’s best hope.',
  ask: 'What does Briand do?',
  opts: [
    { t: 'Sign Locarno, and sign new treaties promising to defend Poland and Czechoslovakia.' },
    { t: 'Refuse to sign unless Britain guarantees the eastern borders too.', x: 'Britain would never agree, and France would have lost the British guarantee of the Rhine.' },
    { t: 'Sign Locarno and drop France’s eastern alliances.', x: 'France kept its eastern alliances and strengthened them at Locarno.' },
    { t: 'Demand a German apology for the war before signing.', x: 'Briand wanted reconciliation. Reopening war guilt would have wrecked the talks.' }
  ],
  ans: 0,
  out: 'At Locarno Germany accepted its western borders, guaranteed by Britain and Italy. France signed new mutual-assistance treaties with Poland and Czechoslovakia. Briand and Stresemann shared the 1926 Nobel Peace Prize, and Germany joined the League.',
  head: 'LOCARNO! FRANCE AND GERMANY SHAKE HANDS',
  fx: { tens: -10, auth: 6, mark: [{ id: 'locarno', kind: 'deal', label: 'Locarno 1925' }] },
  focus: [8, 48, 5],
  exam: 'Locarno made the west secure but left the east open. France’s eastern allies depended on France alone.',
  hist: 'Briand’s policy of reconciliation is admired, but critics argue it rested on trusting German goodwill that later vanished.',
  motive: 'Briand saw that France could not hold Germany down forever. A British guarantee of the Rhine and German acceptance of its western border were real gains, while the eastern alliances stayed in place.'
},
{
  id: 'kelloggF', lv: 'both', date: 'August 1928', title: 'Outlawing War',
  ldr: 'briand', speaker: 'kellogg',
  said: 'Why only France and America, Monsieur Briand? Let every nation renounce war.',
  brief: 'In 1927 Briand proposed a pact between France and the United States renouncing war between them, hoping to tie America into France’s security. The US Secretary of State, Frank Kellogg, has turned it into an offer for all nations. The new pact would have no means of enforcement.',
  ask: 'What does France do?',
  opts: [
    { t: 'Withdraw, since the pact no longer helps France specifically.', x: 'Briand accepted the wider pact, which still brought America into European peace-making.' },
    { t: 'Sign the multilateral Kellogg–Briand Pact in Paris.' },
    { t: 'Demand that the pact include sanctions against aggressors.', x: 'The USA would never accept sanctions. The pact stayed a statement of principle.' },
    { t: 'Sign only if Germany is excluded.', x: 'Germany was among the first signatories. Excluding it would have contradicted the Locarno spirit.' }
  ],
  ans: 1,
  out: 'The Kellogg–Briand Pact was signed in Paris on 27 August 1928 by 15 nations, including Germany and the USA; over 60 joined in the end. It had no means of enforcement, but it marked the high point of 1920s optimism.',
  head: 'NATIONS OUTLAW WAR IN PARIS',
  fx: { tens: -6, auth: 3, mark: [{ id: 'paris', kind: 'deal', label: 'Kellogg–Briand 1928' }] },
  focus: [2, 49, 5],
  exam: 'Useful evidence of improving relations in the late 1920s, and of the weakness of agreements without enforcement.',
  hist: 'Often mocked in hindsight, the pact later underpinned the charge of “crimes against peace” at Nuremberg.',
  motive: 'France wanted any link that drew America into European security. A pact without teeth was better than none.'
},
{
  id: 'maginot', lv: 'both', date: 'January 1930', title: 'A Wall of Concrete',
  ldr: 'maginot', speaker: 'poincare',
  said: 'Never again Verdun. Never again French youth thrown against German guns.',
  brief: 'Allied troops will leave the Rhineland in 1930, five years early. France’s population is smaller than Germany’s, and in the mid-1930s the generation born during the war, when few babies were born, will reach military age. The army’s leaders believe defence beats attack, as it did in 1914–18. The War Minister, André Maginot, asks Parliament for money.',
  ask: 'What does France build?',
  opts: [
    { t: 'A large tank force for attacking Germany.', x: 'France’s leaders believed in defence. Ideas for mobile armoured forces came later and were largely ignored.' },
    { t: 'A line of fortifications along the German border: the Maginot Line.' },
    { t: 'Nothing. Rely on the League and the Locarno guarantee.', x: 'France did not trust guarantees alone. The memory of 1914 was too strong.' },
    { t: 'Fortifications along the Belgian border as well as the German one.', a: true, x: 'Belgium was an ally until 1936, and extending the line was expensive. The Belgian frontier was only lightly fortified.' }
  ],
  ans: 1,
  out: 'Parliament voted the money in January 1930, and the Maginot Line was built along the German border during the 1930s. It made France feel safe, but it encouraged a defensive mindset. A defensive army could not easily help Poland or Czechoslovakia, the allies France had promised to defend.',
  head: 'FRANCE BUILDS ITS WALL',
  fx: { tens: 2, mark: [{ id: 'maginot', kind: 'deal', label: 'Maginot Line 1930' }] },
  focus: [6, 49, 6],
  exam: 'Explains why France stayed passive in the 1930s: its army was designed to defend, not to attack.',
  hist: 'Historians note the contradiction: France had alliances in the east that it could only honour by attacking, but built an army that could only defend.',
  motive: 'Memories of Verdun and the huge losses of 1914–18, and a shortage of young men in the 1930s, made defence seem the only sensible strategy.'
},
{
  id: 'disarmF', lv: 'both', date: 'February 1932', title: 'Security First',
  ldr: 'tardieu', speaker: 'bruning',
  said: 'Germany asks only for equal treatment. Disarm, or let us rearm.',
  brief: 'France refuses to disarm without security, and says so as the World Disarmament Conference opens in Geneva. Germany, still under the Versailles limits, demands equality. Britain and America press France to cut its army, but offer no new guarantees. André Tardieu, France’s chief delegate and soon its Prime Minister, has a proposal.',
  ask: 'What does France propose?',
  opts: [
    { t: 'Cut the French army to Germany’s level straight away.', x: 'France would not disarm while Germany had the larger population and industry.' },
    { t: 'An international police force under the League, and no French disarmament without guarantees.' },
    { t: 'Allow Germany to rearm to France’s level.', x: 'That was what France feared most.' },
    { t: 'Leave the conference.', x: 'France stayed and argued its case. It was Germany that walked out in 1933.' }
  ],
  ans: 1,
  out: 'The Tardieu Plan proposed giving the League its own armed force, with heavy weapons placed under League control. Britain and others rejected it. France would not disarm without security, Germany would not accept inequality, and in October 1933 Hitler left the conference.',
  head: 'TARDIEU: “A LEAGUE ARMY FIRST”',
  fx: { tens: 8, auth: -8, mark: [{ id: 'geneva', kind: 'fail', label: 'Disarmament fails 1933' }] },
  focus: [5, 48, 5],
  exam: 'The French demand for “security first” is a key reason disarmament failed.',
  hist: 'Historians argue the conference failed because France and Germany wanted contradictory things: security and equality.',
  motive: 'France’s army was its only real guarantee against a bigger Germany. Without British or American promises, disarming looked like suicide.'
},
{
  id: 'rome35', lv: 'a', date: 'January 1935', title: 'Laval in Rome',
  ldr: 'laval', speaker: 'mussolini',
  said: 'Italy wants only a free hand in Africa, Monsieur Laval. In Europe we are your friends.',
  brief: 'Pierre Laval, the Foreign Minister, wants Italy as an ally against Germany. Mussolini blocked Hitler over Austria in 1934 and could become France’s partner. In Rome, Mussolini wants concessions in Africa, especially over Abyssinia, a fellow League member.',
  ask: 'What does Laval agree?',
  opts: [
    { t: 'Refuse any concessions over Africa.', x: 'Laval valued Italian friendship against Germany far more than Abyssinia.' },
    { t: 'Settle colonial disputes, and hint that France will not stand in Italy’s way in Abyssinia.' },
    { t: 'Sign a full military alliance with Italy.', x: 'The Rome Agreements were limited. Military talks followed later in 1935, briefly.' },
    { t: 'Promise to defend Abyssinia against Italy.', x: 'Laval had no intention of doing this.' }
  ],
  ans: 1,
  out: 'The Rome Agreements (January 1935) settled colonial disputes, and France gave Italy small pieces of African territory. In private Laval appeared to give Mussolini a free hand in Abyssinia. He later claimed he meant only economic influence, but Mussolini understood it as consent.',
  head: 'LAVAL AND MUSSOLINI EMBRACE IN ROME',
  fx: { tens: 4, mark: [{ id: 'rome', kind: 'deal', label: 'Rome Agreements 1935' }] },
  focus: [12, 42, 5],
  exam: 'Helps explain why France was so reluctant to punish Italy over Abyssinia later in 1935.',
  hist: 'What Laval actually promised is still debated, but most historians agree Mussolini left Rome believing France would not oppose him.',
  motive: 'France feared Germany above everything. An Italian ally would protect Austria and France’s south-eastern border, and to Laval that was worth more than Abyssinia.'
},
{
  id: 'sovietpact', lv: 'a', date: 'May 1935', title: 'A Pact with Moscow',
  ldr: 'laval', speaker: 'stalin',
  said: 'The Soviet Union will stand with France, if France stands with us.',
  brief: 'Hitler is rearming openly. France’s eastern allies look weak, and Poland has signed a non-aggression pact with Germany. The USSR joined the League in 1934 and now fears Hitler too. Louis Barthou, the Foreign Minister killed in Marseille in October 1934, had begun talks with Moscow. Many French conservatives fear communism.',
  ask: 'What does France do?',
  opts: [
    { t: 'Refuse any deal with communists.', x: 'Fear of Germany outweighed fear of communism. France signed, though without enthusiasm.' },
    { t: 'Sign a mutual-assistance pact with the USSR.' },
    { t: 'Sign a full military alliance with joint war plans.', x: 'The pact was signed, but France avoided detailed military talks with the Red Army.' },
    { t: 'Ask Britain to join a three-way alliance.', x: 'Britain would not commit itself. The pact was Franco-Soviet only.' }
  ],
  ans: 1,
  out: 'The Franco-Soviet Pact was signed in May 1935, promising mutual help if either was attacked. France delayed ratification until February 1936, and never followed it with serious military planning. Hitler used the ratification as an excuse to march into the Rhineland in March 1936.',
  head: 'FRANCE AND RUSSIA SIGN PACT',
  fx: { tens: 4, mark: [{ id: 'moscow', kind: 'deal', label: 'Franco-Soviet Pact 1935' }] },
  focus: [20, 52, 3],
  exam: 'The pact gave Hitler his excuse for the Rhineland. A good example of how decisions linked together.',
  hist: 'Historians argue France half-committed to the USSR, which gained little in security but alarmed Hitler, Poland and the French right.',
  motive: 'With Germany rearming and its eastern allies wavering, France looked for any counterweight. But distrust of communism meant it never made the pact effective.'
},
{
  id: 'sanctionsF', lv: 'both', date: 'October 1935', title: 'Sanctions?',
  ldr: 'laval', speaker: 'selassie',
  said: 'France signed the Covenant too, Monsieur Laval.',
  brief: 'Italy has invaded Abyssinia, and the League is about to vote on sanctions. Laval, now Prime Minister, only months ago won Mussolini’s friendship in Rome. France’s generals want Italy as an ally, so French troops can be moved from the Alps to the German border. Britain is pressing for sanctions.',
  ask: 'What does France do?',
  opts: [
    { t: 'Block sanctions completely.', x: 'France could not openly defy the League or split from Britain, its most important partner.' },
    { t: 'Agree to limited sanctions, but resist any oil embargo.' },
    { t: 'Back full oil sanctions alongside Britain.', x: 'Laval feared oil sanctions would mean war with Italy and push Mussolini to Hitler.' },
    { t: 'Close French ports in Africa to Italian ships.', a: true, x: 'France did not go beyond the League’s limited sanctions.' }
  ],
  ans: 1,
  out: 'France voted for limited sanctions, but Laval worked to delay and weaken them, and no oil embargo was ever imposed. The sanctions irritated Mussolini without stopping him.',
  head: 'PARIS DRAGS ITS FEET ON SANCTIONS',
  fx: { tens: 10, auth: -8, mark: [{ id: 'addis', kind: 'war', label: 'Abyssinia 1935' }] },
  focus: [20, 30, 3],
  exam: 'Contrast French and British motives over Abyssinia: France cared more about Italy as an ally against Germany.',
  hist: 'Historians see the Anglo-French split over Abyssinia as fatal: neither would act fully, so sanctions failed.',
  motive: 'For France, Germany was the danger next door and Italy a vital ally against it. Abyssinia was far away. Laval wanted to keep both Britain and Italy on France’s side.'
},
{
  id: 'hoarelavalF', lv: 'both', date: 'December 1935', title: 'The Paris Plan',
  ldr: 'laval', speaker: 'mussolini',
  said: 'Two-thirds of Abyssinia, offered on a plate? I might be persuaded.',
  brief: 'Laval wants the war ended before oil sanctions are imposed and Mussolini turns to Hitler. Britain’s Foreign Secretary, Sir Samuel Hoare, is passing through Paris. Laval believes a deal can be done quietly.',
  ask: 'What do Laval and Hoare agree?',
  opts: [
    { t: 'To impose oil sanctions together.', x: 'This was the opposite of what Laval wanted.' },
    { t: 'A secret plan to give Italy about two-thirds of Abyssinia.' },
    { t: 'To let the League decide.', x: 'They acted precisely to bypass the League’s slow process.' },
    { t: 'To recognise Italy’s conquest outright.', a: true, x: 'The plan left Abyssinia a small independent state, with a corridor to the sea.' }
  ],
  ans: 1,
  out: 'The Hoare–Laval Plan leaked to the French press. There was outrage in Britain, and Hoare resigned. Laval’s government fell in January 1936. Italy completed its conquest in May 1936.',
  head: 'SECRET DEAL LEAKED — LAVAL’S GOVERNMENT FALLS',
  fx: { tens: 8, auth: -16, mark: [{ id: 'paris', kind: 'fail', label: 'Hoare–Laval 1935' }] },
  focus: [8, 30, 3],
  exam: 'Shows Britain and France putting their own interests before the Covenant.',
  hist: 'Laval was later executed for collaboration with Germany after 1945, and his reputation colours how this episode is remembered.',
  motive: 'Laval believed keeping Mussolini away from Hitler was worth sacrificing part of Abyssinia. In his view France’s security came first.'
},
{
  id: 'rhinelandF', lv: 'both', date: 'March 1936', title: 'Germans on the Rhine',
  ldr: 'sarraut', speaker: 'hitler',
  said: 'If the French march, we retreat with our tails between our legs.',
  brief: 'German troops have entered the demilitarised Rhineland, citing the new Franco-Soviet Pact as their excuse. France has a caretaker government with an election weeks away and a weak franc. The army chief, General Gamelin, says any action would need full mobilisation and overestimates German strength. Britain makes clear it will not fight.',
  ask: 'What does France do?',
  opts: [
    { t: 'Send the army in to expel the Germans.', x: 'The generals said only full mobilisation would do, and the government would not mobilise without Britain, weeks before an election.' },
    { t: 'Protest to the League and the Locarno powers, but take no military action.' },
    { t: 'Accept the move quietly.', x: 'France protested loudly. Sarraut declared that France would not leave Strasbourg under the fire of German guns.' },
    { t: 'Mobilise alone and occupy the Saar.', a: true, x: 'France never considered acting without Britain.' }
  ],
  ans: 1,
  out: 'France appealed to the League and the Locarno guarantors. The League condemned Germany, and Britain offered talks, but nobody acted. German troops stayed. France’s eastern allies concluded that France could no longer help them.',
  head: 'FRANCE PROTESTS — BUT DOES NOT MARCH',
  fx: { tens: 12, auth: -8, own: { rhineland: 'de' }, mark: [{ id: 'rhineland', kind: 'war', label: 'Rhineland 1936' }] },
  focus: [6, 49, 7],
  exam: 'The Rhineland shows France would not act without Britain: a key reason Hitler’s gamble worked.',
  hist: 'Many historians see this as the last chance to stop Hitler cheaply. Others stress that French leaders were trapped by their own defensive army and by the British refusal.',
  motive: 'France’s army was built for defence, its generals exaggerated German strength, and its leaders would not risk war without Britain, which had refused.'
},
{
  id: 'spainF', lv: 'both', date: 'August 1936', title: 'Blum and Spain',
  ldr: 'blum', speaker: 'franco',
  said: 'Help the Reds, Monsieur Blum, and you will have Spain’s civil war in France.',
  brief: 'Léon Blum’s Popular Front, a left-wing government, has just come to power. Across the border, Spain’s left-wing Republic is fighting General Franco, who is helped by Germany and Italy. Blum’s instinct is to send the Republic aircraft. Britain disapproves, and the French right furiously opposes any help. Mussolini now has his Abyssinian empire.',
  ask: 'What does Blum do?',
  opts: [
    { t: 'Openly send aircraft and arms to the Spanish Republic.', x: 'Blum tried at first, but drew back in the face of opposition at home and from Britain.' },
    { t: 'Propose a Non-Intervention Agreement, while letting a few weapons slip across the border.' },
    { t: 'Back Franco to keep Mussolini friendly.', x: 'A left-wing French government would never support Franco.' },
    { t: 'Send French troops into Spain.', a: true, x: 'Blum never considered military intervention.' }
  ],
  ans: 1,
  out: 'On 1 August 1936 France proposed non-intervention, and the agreement followed weeks later. Some arms reached the Republic through France, but Germany and Italy gave Franco far more. Blum later said not helping Spain was the greatest regret of his life.',
  head: 'BLUM: “NON-INTERVENTION”',
  fx: { tens: 8, own: { abyssinia: 'it' }, mark: [{ id: 'guernica', kind: 'war', label: 'Spanish Civil War' }, { id: 'addis', kind: 'fail', label: 'Abyssinia conquered 1936' }] },
  focus: [-1, 43, 5],
  exam: 'Shows how fear of internal division and dependence on Britain shaped French policy.',
  hist: 'Historians see France as deeply divided between left and right in the 1930s, which made a firm foreign policy almost impossible.',
  motive: 'Blum feared that intervening would split France itself, and he could not risk losing Britain, France’s only great-power friend.'
},
{
  id: 'munichF', lv: 'both', date: 'September 1938', title: 'Munich',
  ldr: 'daladier', speaker: 'nchamberlain',
  said: 'How horrible, fantastic, incredible it is that we should be digging trenches and trying on gas-masks here because of a quarrel in a far-away country between people of whom we know nothing.',
  saidReal: true,
  brief: 'France has a treaty with Czechoslovakia, signed in 1924 and reinforced at Locarno, to defend it if attacked. Hitler demands the Sudetenland. France’s air force chief has returned from Germany warning that the Luftwaffe could destroy French air power within days. Chamberlain says Britain will not fight for Czechoslovakia alone.',
  ask: 'What does Daladier do?',
  opts: [
    { t: 'Honour the treaty and fight for Czechoslovakia.', x: 'Daladier would not go to war without Britain, and the French army was designed for defence.' },
    { t: 'Go to Munich with Chamberlain and accept the transfer of the Sudetenland.' },
    { t: 'Let Chamberlain decide and stay at home.', x: 'Daladier went to Munich and signed alongside Chamberlain.' },
    { t: 'Ask the League to send observers to the Sudetenland.', a: true, x: 'By 1938 the League was not involved. Munich was settled by four great powers.' }
  ],
  ans: 1,
  out: 'Daladier signed the Munich Agreement. Czechoslovakia, France’s ally, was not even present. Arriving back in Paris to cheering crowds, Daladier is said to have muttered: “The fools, they don’t know what they are cheering.” France’s eastern alliance system was finished.',
  head: 'DALADIER SIGNS AT MUNICH',
  fx: { tens: 10, auth: -6, own: { sudetenland: 'de' }, mark: [{ id: 'munich', kind: 'deal', label: 'Munich 1938' }] },
  focus: [8, 49, 5],
  exam: 'France broke its treaty with Czechoslovakia: a key point when explaining why Hitler did not believe France would fight in 1939.',
  hist: 'French historians often stress the national exhaustion and division that lay behind Munich.',
  motive: 'France feared German air power, depended on Britain, and had an army built for defence. Daladier knew Munich was a defeat, but saw no alternative.'
},
{
  id: 'guaranteeF', lv: 'both', date: 'March 1939', title: 'After Prague',
  ldr: 'daladier', speaker: 'hacha',
  said: 'At one in the morning they told me Prague would be bombed at dawn unless I signed…',
  brief: 'Hitler has seized Prague and destroyed what remained of Czechoslovakia. France already has an alliance with Poland. Britain, which refused any commitment in eastern Europe for twenty years, now offers to guarantee Poland.',
  ask: 'What does France do?',
  opts: [
    { t: 'Join Britain in guaranteeing Poland’s independence.' },
    { t: 'Drop the Polish alliance to avoid war.', x: 'After Prague, French opinion hardened. Abandoning another ally would have finished France as a great power.' },
    { t: 'Attack Germany immediately.', x: 'France had no plan for an attack and would not act without Britain.' },
    { t: 'Offer Hitler Danzig in exchange for peace.', a: true, x: 'Some in Paris were tempted, but France stood with Britain and the guarantee.' }
  ],
  ans: 0,
  out: 'On 31 March 1939 Britain and France jointly guaranteed Poland, and in April they also guaranteed Romania and Greece. For the first time Britain was fully committed alongside France in eastern Europe.',
  head: 'PARIS AND LONDON: HANDS OFF POLAND',
  fx: { tens: 12, own: { bohemia: 'de', memel: 'de' }, mark: [{ id: 'prague', kind: 'war', label: 'Prague 1939' }, { id: 'warsaw', kind: 'deal', label: 'Guarantee 1939' }] },
  focus: [14, 51, 5],
  exam: 'Shows the end of appeasement and the Anglo-French commitment that led to war.',
  hist: 'At last France had the British commitment it had wanted since 1919, but by then Germany was far stronger.',
  motive: 'With Britain finally committed, France could stand by Poland without standing alone. Prague showed that appeasement had failed.'
},
{
  id: 'warF', lv: 'both', date: 'September 1939', title: 'The Phoney War',
  ldr: 'daladier', speaker: 'nchamberlain',
  said: 'Consequently this country is at war with Germany.',
  saidReal: true,
  brief: 'Germany has invaded Poland. Britain declared war at 11 a.m. on 3 September. France’s Foreign Minister has looked for a last-minute conference. The French army is ready to defend the Maginot Line, but has no plan for a major attack on Germany. Poland is fighting alone in the east.',
  ask: 'What does France do?',
  opts: [
    { t: 'Stay neutral and wait.', x: 'France had guaranteed Poland and could not abandon another ally.' },
    { t: 'Declare war, make a small advance into the Saar, then return to the Maginot Line.' },
    { t: 'Launch a full-scale invasion of Germany to save Poland.', x: 'France’s army was built for defence. Its leaders would not risk heavy losses attacking the German frontier.' },
    { t: 'Send troops to Poland by sea.', a: true, x: 'There was no practical route. France could only help Poland by attacking in the west.' }
  ],
  ans: 1,
  out: 'France declared war at 5 p.m. on 3 September 1939. French troops advanced a few miles into the Saar, then pulled back. Poland was defeated within weeks, and the long “Phoney War” followed until Germany attacked in the west in May 1940.',
  head: 'FRANCE AT WAR',
  fx: { tens: 30, auth: -10, mark: [{ id: 'warsaw', kind: 'war', label: 'Invasion of Poland 1939' }, { id: 'saar', kind: 'war', label: 'Saar offensive 1939' }] },
  focus: [10, 50, 4],
  exam: 'Tie your answer together: French security fears, dependence on Britain, the Maginot mindset and broken alliances all shaped 1939.',
  hist: 'Historians debate whether a real French attack in September 1939, while most of the German army was in Poland, could have changed the war.',
  motive: 'France had to honour its guarantee, but its army and its leaders were built for defence. They believed time was on their side and waited behind the Maginot Line.'
}
];
