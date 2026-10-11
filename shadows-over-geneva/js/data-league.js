// LEAGUE OF NATIONS COUNCIL campaign.
// lv: 'both' = IGCSE + A-Level, 'a' = A-Level only. Options flagged a:true appear only in A-Level.
// ans = index of the historically correct option (options are shuffled at play time).
window.SCENARIOS = window.SCENARIOS || {};
window.SCENARIOS.league = [
{
  id: 'aaland', lv: 'both', date: 'June 1921', title: 'The Åland Islands',
  ldr: 'drummond', speaker: 'drummond',
  said: 'Two small nations, one set of islands. If we cannot settle this, gentlemen, we cannot settle anything.',
  brief: 'The Åland Islands lie between Sweden and Finland. They have belonged to Finland since 1809, but almost all the islanders speak Swedish and want to join Sweden. Finland, newly independent, refuses to give them up. Both sides are threatening to fight, and Britain has asked the League to decide.',
  ask: 'How does the Council rule?',
  opts: [
    { t: 'Give the islands to Sweden, because the islanders want it.', x: 'Self-determination was tempting, but the League’s commission found the islands belonged to Finland. Taking land from a new state would set a dangerous precedent for every minority in Europe.' },
    { t: 'Finland keeps the islands, but they are demilitarised and the islanders keep their Swedish language and self-government.' },
    { t: 'Stay out of it. This is a quarrel between Sweden and Finland.', x: 'A dispute between two members was exactly what the League was created to settle. Britain had formally referred it to the Council.' },
    { t: 'Hold a referendum on the islands, supervised by the League.', a: true, x: 'The commission of jurists rejected a plebiscite. It feared that letting a minority vote itself out of a state would encourage break-aways across the continent.' }
  ],
  ans: 1,
  out: 'In June 1921 the Council ruled that the islands should stay Finnish. They were demilitarised and the islanders were guaranteed autonomy and the Swedish language. Sweden accepted the decision and war was avoided.',
  head: 'LEAGUE SETTLES ÅLAND ROW — SWEDEN ACCEPTS',
  fx: { auth: 10, tens: -4, mark: [{ id: 'aaland', kind: 'win', label: 'Åland 1921' }] },
  focus: [20, 60, 9],
  exam: 'A League success: both countries were small, both were members, and both accepted the ruling. Use it to show the League could work when great powers were not involved.',
  hist: 'Historians such as Ruth Henig present Åland as the model of what the League was designed for: small states, an impartial commission, and minority rights written into the settlement.'
},
{
  id: 'vilna', lv: 'both', date: 'October 1920', title: 'The Seizure of Vilna',
  ldr: 'drummond', speaker: 'pilsudski',
  said: 'General Żeligowski acted on his own. Of course, Vilna is a Polish city…',
  brief: 'Poland is a close ally of France, and Britain and France see the new Polish state as a barrier against Germany and Soviet Russia. Vilna is the capital of the new state of Lithuania, but most of its people are Polish or Jewish. In October 1920 a Polish army under General Żeligowski marches in and takes the city. Lithuania appeals to the League.',
  ask: 'What does the League do?',
  opts: [
    { t: 'Raise an international army and drive the Poles out.', x: 'The League had no army of its own. Britain and France were not willing to send troops against their ally Poland.' },
    { t: 'Ask Poland to withdraw. When Poland refuses, take no further action.' },
    { t: 'Impose economic sanctions on Poland until it leaves.', x: 'Sanctions only work if the great powers enforce them. France would not punish its most important ally in Eastern Europe.' },
    { t: 'Put Vilna under a permanent League governor, like the Saar.', a: true, x: 'A plebiscite under League supervision was proposed, but the plan collapsed in 1921 and nobody was prepared to take the city from Poland.' }
  ],
  ans: 1,
  out: 'The League protested and proposed a plebiscite, but the idea was dropped. Poland kept Vilna and annexed it in 1922; the Conference of Ambassadors recognised this in 1923. Lithuania refused normal relations with Poland for years afterwards.',
  head: 'POLES HOLD VILNA — GENEVA DOES NOTHING',
  fx: { auth: -10, tens: 5, mark: [{ id: 'vilna', kind: 'fail', label: 'Vilna 1920' }] },
  focus: [24, 54, 9],
  exam: 'A League failure: when one side was an ally of Britain or France, the League would not act. Members put their own interests before collective security.',
  hist: 'Zara Steiner stresses that the League’s machinery depended on the great powers’ willingness to use it. At Vilna, French strategic interest in a strong Poland outweighed the Covenant.'
},
{
  id: 'silesia', lv: 'both', date: 'October 1921', title: 'Upper Silesia',
  ldr: 'drummond', speaker: 'drummond',
  said: 'The vote is in, and it satisfies no one. Germany won the count; Poland won the coalfields.',
  brief: 'Upper Silesia is a rich industrial region of coal mines and steelworks claimed by both Germany and Poland. In the March 1921 plebiscite about 60% vote to stay German, but many districts in the industrial east vote for Poland. Polish Silesians rise in revolt. The Allies cannot agree and pass the problem to the League.',
  ask: 'What does the Council recommend?',
  opts: [
    { t: 'Give the whole region to Germany, since Germany won the vote.', x: 'The vote was split district by district. Handing every Polish-voting area to Germany would have caused another rising and angered France.' },
    { t: 'Give the whole region to Poland, to weaken Germany.', x: 'That would have ignored the plebiscite entirely and handed hundreds of thousands of German voters to Poland.' },
    { t: 'Split it: Germany gets most of the land and people, Poland most of the industry, with protection for workers and minorities.' },
    { t: 'Keep it under permanent League control.', a: true, x: 'Nobody wanted another Saar or Danzig. The Council chose partition, backed by a 15-year convention on minorities and the economy.' }
  ],
  ans: 2,
  out: 'The League divided Upper Silesia. Germany got most of the land and population; Poland got most of the industrial area, including most of the coal mines. A convention protected minorities and kept the railways and water supply working across the border. Both sides accepted it, though many Germans were bitter.',
  head: 'SILESIA DIVIDED — BOTH SIDES ACCEPT',
  fx: { auth: 6, tens: 2, mark: [{ id: 'silesia', kind: 'win', label: 'Upper Silesia 1921' }] },
  focus: [18.5, 50.5, 9],
  exam: 'Usually counted as a success: the decision was accepted and a convention protected minorities. German resentment shows the limits of the settlement.',
  hist: 'German nationalists treated the partition as another Versailles injustice. Sally Marks argues that it was, in fact, a careful compromise that ran reasonably well for 15 years.'
},
{
  id: 'protocol', lv: 'a', date: 'March 1925', title: 'The Geneva Protocol',
  ldr: 'drummond', speaker: 'chamberlainA',
  said: 'His Majesty’s Government cannot sign a blank cheque for every frontier in Europe.',
  brief: 'In 1924 Ramsay MacDonald’s Labour government and the French premier Herriot back the Geneva Protocol. Disputes would have to go to arbitration; any state that refused would be named the aggressor, and all members would have to help its victim. Before Britain can ratify, the Conservatives win the election. The new Foreign Secretary is Austen Chamberlain.',
  ask: 'What happens to the Protocol?',
  opts: [
    { t: 'Britain ratifies it and collective security gains real teeth.', x: 'The Conservatives feared open-ended commitments that might drag Britain into wars anywhere. The Dominions objected too.' },
    { t: 'Britain refuses to ratify, and the Protocol dies.' },
    { t: 'The League creates its own standing army instead.', x: 'No member would hand troops to the League. A League army was never seriously on the table in the 1920s.' },
    { t: 'Britain ratifies, but only for disputes inside Europe.', a: true, x: 'Chamberlain looked for a narrower regional deal, but outside the Protocol. That search led to Locarno.' }
  ],
  ans: 1,
  out: 'In March 1925 Chamberlain told the Council that Britain would not ratify. Without Britain, the Protocol was dead. Instead, Chamberlain pursued the more limited Locarno treaties, signed outside the League.',
  head: 'BRITAIN KILLS GENEVA PROTOCOL',
  fx: { auth: -6, tens: 2, mark: [{ id: 'geneva', kind: 'fail', label: 'Protocol rejected 1925' }] },
  focus: [6, 47, 6],
  exam: 'Shows that the League’s strongest members would not accept automatic obligations, so collective security stayed voluntary.',
  hist: 'E. H. Carr later called interwar faith in collective security “utopian”. More recent writers such as Steiner see Britain’s choice of Locarno over the Protocol as a rational preference for limited, enforceable commitments.'
},
{
  id: 'corfu', lv: 'both', date: 'August 1923', title: 'The Corfu Incident',
  ldr: 'drummond', speaker: 'mussolini',
  said: 'Italy demands an apology and fifty million lire. Geneva may watch.',
  brief: 'The Italian general Tellini, mapping the Greek–Albanian border for the Conference of Ambassadors, is murdered on Greek soil. Italy is a permanent member of the Council, and Mussolini blames Greece and demands 50 million lire. When Greece cannot find the killers, Italy bombards and occupies the Greek island of Corfu. Greece appeals to the League.',
  ask: 'How is the crisis settled?',
  opts: [
    { t: 'Condemn Italy and impose economic sanctions.', x: 'Mussolini threatened to leave the League. Britain and France would not risk a confrontation with a great power over Corfu.' },
    { t: 'Order Italy out of Corfu and make Italy pay compensation to Greece.', x: 'The Council leaned this way at first, but Mussolini refused to accept its authority.' },
    { t: 'Hand it to the Conference of Ambassadors, which makes Greece apologise and pay Italy 50 million lire. Italy then leaves Corfu.' },
    { t: 'Ask the Permanent Court of International Justice to rule first.', a: true, x: 'Jurists were consulted only later, and their 1924 opinion was vague. In the meantime the great powers settled it outside the League.' }
  ],
  ans: 2,
  out: 'The Council’s first instinct was to condemn Italy, but Mussolini insisted that the Conference of Ambassadors decide. It made Greece apologise and pay Italy 50 million lire directly. Italy withdrew from Corfu on 27 September 1923.',
  head: 'GREECE PAYS UP — MUSSOLINI LEAVES CORFU',
  fx: { auth: -14, tens: 6, mark: [{ id: 'corfu', kind: 'fail', label: 'Corfu 1923' }] },
  focus: [20, 40, 8],
  exam: 'A failure: a great power bullied a smaller one and the League was bypassed. Compare it with Bulgaria in 1925 to show double standards.',
  hist: 'Mussolini allegedly sneered that the League was “very well when sparrows shout, but no good at all when eagles fall out”. Denis Mack Smith reads Corfu as an early example of Mussolini’s foreign policy as propaganda.'
},
{
  id: 'mosul', lv: 'a', date: 'December 1925', title: 'The Mosul Question',
  ldr: 'drummond', speaker: 'drummond',
  said: 'Kurds, oil, a British mandate and an angry Turkish Republic. Choose carefully.',
  brief: 'Turkey and Britain both claim the oil-rich province of Mosul. A League commission has visited and reports that most people would rather stay with Iraq, but only if British protection continues. Turkey says the province was wrongly taken in 1918; Britain wants it inside Iraq, which Britain rules as a League mandate.',
  ask: 'What does the Council decide?',
  opts: [
    { t: 'Return Mosul to Turkey.', x: 'The commission found little support for Turkish rule. Britain, a permanent Council member, would never have accepted it.' },
    { t: 'Award Mosul to Iraq, on condition that the British mandate lasts another 25 years and Kurdish rights are respected.' },
    { t: 'Partition the province along the River Tigris.', x: 'No such split was proposed. The Council accepted the commission’s recommendation almost unchanged.' },
    { t: 'Hold a plebiscite in the province.', a: true, x: 'The commission sounded out opinion but recommended against a formal vote in such a divided region.' }
  ],
  ans: 1,
  out: 'In December 1925 the Council gave Mosul to Iraq, on condition that the British mandate continued and Kurds received some local rights. Turkey protested but accepted the ruling in the 1926 Treaty of Ankara, in exchange for a share of oil revenues.',
  head: 'MOSUL TO IRAQ — TURKEY BOWS TO GENEVA',
  fx: { auth: 5, tens: -2, mark: [{ id: 'mosul', kind: 'win', label: 'Mosul 1925' }] },
  focus: [43, 36, 7],
  exam: 'A successful ruling, but one that suited Britain. A useful example when asking whose interests the League served.',
  hist: 'Critics argue the ruling served British imperial and oil interests. Supporters note that Turkey accepted it peacefully, which suggests the League could make lasting settlements.'
},
{
  id: 'petrich', lv: 'both', date: 'October 1925', title: 'Greece Invades Bulgaria',
  ldr: 'drummond', speaker: 'briand',
  said: 'Stop your armies — now! Then we will talk about who was to blame.',
  brief: 'Greek soldiers are killed in a clash on the Bulgarian border. Greece invades Bulgaria and occupies the area around Petrich. Bulgaria orders its army to offer only token resistance and appeals to the League. Aristide Briand of France is chairing the Council.',
  ask: 'What does the League do?',
  opts: [
    { t: 'Order a ceasefire and withdrawal, investigate, and make Greece pay Bulgaria £45,000.' },
    { t: 'Let Greece keep the area until Bulgaria apologises, as with Corfu.', x: 'Greece was a small power without Italy’s weight. Britain and France supported firm League action.' },
    { t: 'Send a League army to protect Bulgaria.', x: 'There was no need. Britain and France backed the Council, and Greece backed down quickly.' },
    { t: 'Pass it to the Conference of Ambassadors.', a: true, x: 'With no great power involved, the Council handled it directly and quickly.' }
  ],
  ans: 0,
  out: 'The Council ordered both sides to stop and Greece to withdraw. A commission blamed Greece, which paid £45,000 compensation. Greece complied but complained that one rule applied to great powers and another to small ones.',
  head: 'LEAGUE STOPS BALKAN WAR IN DAYS',
  fx: { auth: 10, tens: -4, mark: [{ id: 'petrich', kind: 'win', label: 'Petrich 1925' }] },
  focus: [23, 42, 8],
  exam: 'A clear success, but compare it with Corfu. The League was firm with small states and weak with great powers.',
  hist: 'Greece’s complaint about double standards is often quoted. It shows that the League’s authority depended on who the aggressor was.'
},
{
  id: 'admit', lv: 'both', date: 'September 1926', title: 'Germany Joins the League',
  ldr: 'drummond', speaker: 'briand',
  said: 'Away with rifles, machine guns and cannon! Make way for conciliation, arbitration and peace!',
  saidReal: true,
  brief: 'After the Locarno treaties of 1925, Gustav Stresemann’s Germany applies to join the League. Germany insists on a permanent seat on the Council as a great power. Poland, Spain and Brazil demand permanent seats too, and the first attempt to admit Germany, in March 1926, collapses.',
  ask: 'What does the League do?',
  opts: [
    { t: 'Admit Germany with a permanent seat on the Council.' },
    { t: 'Keep Germany out: it is still a danger to France.', x: 'The “Spirit of Locarno” was at its height. Britain and France wanted Germany inside the system, not outside it.' },
    { t: 'Admit Germany, but only as an ordinary member.', x: 'Stresemann would not accept second-class status, and Britain agreed that Germany was a great power.' },
    { t: 'Admit Germany, and give Poland, Spain and Brazil permanent seats too.', a: true, x: 'A compromise created “semi-permanent” seats instead. Brazil left the League in protest and Spain also announced it would leave.' }
  ],
  ans: 0,
  out: 'Germany joined in September 1926 with a permanent Council seat. Briand welcomed the Germans with a famous speech. Brazil left the League in protest, but the late 1920s became the high point of Franco-German reconciliation.',
  head: 'GERMANY TAKES ITS SEAT AT GENEVA',
  fx: { auth: 10, tens: -8, mark: [{ id: 'geneva', kind: 'win', label: 'Germany joins 1926' }] },
  focus: [6, 47, 6],
  exam: 'Evidence that the League was growing stronger in the 1920s. Combine it with Locarno (1925) and Kellogg–Briand (1928) when explaining improved international relations.',
  hist: 'Sally Marks calls the Locarno era an “illusion of peace”: Germany joined to revise Versailles from inside, not to accept it.'
},
{
  id: 'manchuria', lv: 'both', date: 'September 1931', title: 'The Mukden Incident',
  ldr: 'drummond', speaker: 'matsuoka',
  said: 'Japan acts only to restore order. Manchuria is our lifeline.',
  brief: 'The world is in the depths of the Great Depression, and Japan is a permanent member of the League Council. In September 1931 an explosion damages the Japanese-owned South Manchurian Railway near Mukden. The Japanese army blames Chinese saboteurs and quickly occupies the whole of Manchuria, then sets up a puppet state, Manchukuo. China appeals to the League.',
  ask: 'What does the League do?',
  opts: [
    { t: 'Impose immediate economic sanctions on Japan.', x: 'With trade collapsing in the Depression, nobody wanted to lose the Japanese market. The USA, Japan’s main trading partner, was not a member.' },
    { t: 'Send a League force to Manchuria.', x: 'Only Britain and France could have done so. Neither would risk war in the Far East.' },
    { t: 'Send a commission under Lord Lytton to investigate, then adopt its report condemning Japan.' },
    { t: 'Recognise Manchukuo, since Japan has restored order.', a: true, x: 'The Lytton Report said Manchukuo was not a genuine independence movement and should not be recognised.' }
  ],
  ans: 2,
  out: 'The Lytton Commission took almost a year. Its report said Japan had acted wrongly and Manchuria should return to China. In February 1933 the Assembly adopted it by 42 votes to 1, the one vote against being Japan’s. Japan walked out and left the League, keeping Manchuria. No sanctions followed.',
  head: 'JAPAN QUITS LEAGUE — KEEPS MANCHURIA',
  fx: { auth: -18, tens: 12, own: { manchuria: 'jp' }, mark: [{ id: 'mukden', kind: 'war', label: 'Manchuria 1931' }] },
  focus: [124, 43, 5],
  exam: 'A key failure: a permanent Council member was the aggressor, the League was slow, and the Depression made sanctions unattractive. Japan simply left.',
  hist: 'Christopher Thorne (The Limits of Foreign Policy, 1972) argues that the West had few realistic options in Manchuria. The failure lay in the gap between the League’s promises and its members’ power.'
},
{
  id: 'leticia', lv: 'a', date: 'May 1933', title: 'The Leticia Dispute',
  ldr: 'drummond', speaker: 'drummond',
  said: 'A river town in the Amazon. Small enough to save, perhaps.',
  brief: 'Peruvian irregulars seize Leticia, a Colombian town on the Amazon. Fighting breaks out between Peru and Colombia. Peru’s president is assassinated, and his successor is ready to compromise. The Council is looking for a face-saving formula.',
  ask: 'What does the Council arrange?',
  opts: [
    { t: 'Accept Peru’s seizure of Leticia.', x: 'The town was clearly Colombian under a 1922 treaty. The League condemned Peru’s action.' },
    { t: 'A League commission runs Leticia for a year under the League flag, then hands it back to Colombia.' },
    { t: 'Impose sanctions on Peru.', x: 'Sanctions were not needed once Peru’s new government was willing to compromise.' },
    { t: 'Leave it to the United States to sort out.', a: true, x: 'The USA was not a member, and both countries accepted the League’s role.' }
  ],
  ans: 1,
  out: 'From June 1933 a League commission administered Leticia, with Colombian troops wearing League armbands. A year later the town was handed back to Colombia, and a final agreement followed in 1934. It was a small but genuine success.',
  head: 'LEAGUE FLAG FLIES OVER AMAZON TOWN',
  fx: { auth: 4, tens: -1, mark: [{ id: 'leticia', kind: 'win', label: 'Leticia 1933' }] },
  focus: [-70, -4, 6],
  exam: 'A useful counter-example for the 1930s: the League could still succeed in disputes between smaller states.',
  hist: 'Leticia is often cited as the first time the League directly administered disputed territory with troops under its own flag.'
},
{
  id: 'disarm', lv: 'both', date: '1932–33', title: 'The World Disarmament Conference',
  ldr: 'avenol', speaker: 'hitler',
  said: 'Either you disarm to our level, or Germany will have equality its own way.',
  brief: 'Sixty nations meet in Geneva in 1932. France, terrified of Germany, refuses to cut its army. Germany demands “equality”: either everyone disarms to Germany’s level under the Treaty of Versailles, or Germany may rearm. In January 1933 Hitler becomes Chancellor, and the talks drag on.',
  ask: 'What comes out of the Conference?',
  opts: [
    { t: 'Persuade France to cut its army to German levels.', x: 'France would not disarm while Germany had the bigger population and industry. Britain would not guarantee French security instead.' },
    { t: 'Accept German “equality of rights” in principle, but never agree how. The Conference stalls.' },
    { t: 'Let Germany rearm to French levels.', x: 'No government would openly approve German rearmament. It would have torn up Versailles.' },
    { t: 'Impose sanctions on Germany for secret rearmament.', a: true, x: 'Germany’s secret rearmament was known, but Britain was sympathetic to German complaints and France would not act alone.' }
  ],
  ans: 1,
  out: 'In December 1932 the powers accepted German “equality of rights” in principle, but could not agree how to achieve it. In October 1933 Hitler withdrew from both the Conference and the League. The Conference collapsed in 1934, and the arms race resumed.',
  head: 'HITLER WALKS OUT OF GENEVA',
  fx: { auth: -14, tens: 12, mark: [{ id: 'geneva', kind: 'fail', label: 'Disarmament fails 1933' }] },
  focus: [8, 49, 5],
  exam: 'Disarmament was a key aim of the League. Its failure, and Germany’s exit in 1933, weakened the League just before the Abyssinian crisis.',
  hist: 'Historians disagree on whether a different French policy could have tied Germany down. Most agree that after January 1933 Hitler never intended to accept limits.'
},
{
  id: 'saar', lv: 'a', date: 'January 1935', title: 'The Saar Plebiscite',
  ldr: 'avenol', speaker: 'avenol',
  said: 'The Treaty promised the Saarlanders a vote in 1935. Hitler or no Hitler, the date has come.',
  brief: 'Since 1920 the Saar has been run by the League, with France owning its coal mines. Versailles promised a vote in 1935: rejoin Germany, join France, or stay under the League. Now Germany is ruled by the Nazis, and anti-Nazi Saarlanders fear intimidation.',
  ask: 'What does the League do?',
  opts: [
    { t: 'Postpone the vote until Germany has a democratic government again.', x: 'The vote was a treaty obligation. Postponing it would have looked like France grabbing the Saar.' },
    { t: 'Hold the vote on time, protected by an international peacekeeping force.' },
    { t: 'Hand the Saar to France without a vote.', x: 'That would have broken Versailles and turned the Saar into another German grievance.' },
    { t: 'Keep the Saar under League rule indefinitely.', a: true, x: 'Only the Saarlanders could choose that, and almost none did.' }
  ],
  ans: 1,
  out: 'About 3,300 British, Italian, Dutch and Swedish troops kept order. On 13 January 1935, 90.7% voted to rejoin Germany. The League returned the Saar on 1 March. The vote was well run, but it was a propaganda triumph for Hitler.',
  head: 'SAAR VOTES 9 TO 1 FOR THE REICH',
  fx: { auth: 4, tens: 4, own: { saar: 'de' }, mark: [{ id: 'saar', kind: 'deal', label: 'Saar plebiscite 1935' }] },
  focus: [7, 49.4, 10],
  exam: 'A well-run League operation, but one that boosted Hitler’s prestige just before he announced conscription.',
  hist: 'The international force is sometimes seen as a forerunner of UN peacekeeping.'
},
{
  id: 'walwal', lv: 'a', date: 'December 1934', title: 'The Wal-Wal Incident',
  ldr: 'avenol', speaker: 'selassie',
  said: 'Abyssinia is a member of this League. We ask only what the Covenant promises.',
  brief: 'Britain and France want Mussolini on their side against Hitler, and in April 1935 they will form the Stresa Front with him. In December 1934 Italian and Abyssinian troops clash at the oasis of Wal-Wal, about 80 km inside Abyssinia. Mussolini demands compensation, and Emperor Haile Selassie appeals to the League.',
  ask: 'How does the League handle Wal-Wal?',
  opts: [
    { t: 'Condemn Italy at once and warn Mussolini off.', x: 'Britain and France would not risk the Stresa Front over an African border clash.' },
    { t: 'Delay. Set up arbitration and avoid offending Mussolini.' },
    { t: 'Promise to defend Abyssinia militarily.', x: 'No member was prepared to send forces to East Africa.' },
    { t: 'Ban arms sales to Italy only.', a: true, x: 'In summer 1935 Britain and France actually blocked arms sales to both sides, which hurt Abyssinia far more than Italy.' }
  ],
  ans: 1,
  out: 'The League moved slowly. An arbitration panel reported in September 1935 that neither side was to blame. Mussolini used the months to ship troops and supplies to Eritrea and Italian Somaliland.',
  head: 'GENEVA DITHERS AS ITALIAN TROOPSHIPS SAIL',
  fx: { auth: -6, tens: 6, mark: [{ id: 'walwal', kind: 'crisis', label: 'Wal-Wal 1934' }] },
  focus: [42, 10, 6],
  exam: 'Shows how fear of Hitler shaped Anglo-French policy towards Mussolini.',
  hist: 'The Stresa communiqué spoke of peace “in Europe”. Mussolini took the silence about Africa as a green light.'
},
{
  id: 'abyssinia', lv: 'both', date: 'October 1935', title: 'Italy Invades Abyssinia',
  ldr: 'avenol', speaker: 'selassie',
  said: 'Italy has invaded a fellow member of the League. What will the Covenant mean now?',
  brief: 'On 3 October 1935 Italian armies invade Abyssinia. Britain and France still hope to keep Mussolini as an ally against Hitler, and the USA is not a member of the League. Even so, the League quickly declares Italy the aggressor and must now decide on sanctions. Italy depends on imported oil, and Britain controls the Suez Canal, Italy’s supply route to East Africa.',
  ask: 'What sanctions does the League impose?',
  opts: [
    { t: 'Full sanctions including oil, and close the Suez Canal to Italy.', x: 'Britain and France feared that oil sanctions or closing Suez would mean war with Italy. The USA would have kept supplying oil anyway.' },
    { t: 'Limited sanctions: no arms, loans or Italian imports. Oil, coal and steel still flow, and Suez stays open.' },
    { t: 'No sanctions, to keep Mussolini on side against Hitler.', x: 'Public opinion demanded action. Britain’s Peace Ballot of 1935 showed huge support for sanctions, and the League had already named Italy the aggressor.' },
    { t: 'Blockade Italy’s ports with the Royal Navy.', a: true, x: 'A naval blockade would have been an act of war. Britain was not prepared to fight Italy.' }
  ],
  ans: 1,
  out: 'From November 1935 sanctions banned arms sales, loans and imports from Italy, but not oil, coal or steel. The Suez Canal stayed open. The sanctions irritated Italy without stopping its war machine.',
  head: 'HALF-HEARTED SANCTIONS — OIL STILL FLOWS',
  fx: { auth: -10, tens: 10, mark: [{ id: 'addis', kind: 'war', label: 'Abyssinia 1935' }] },
  focus: [40, 10, 5],
  exam: 'The decisive test of collective security. Explain why sanctions were limited: fear of war, the Suez decision, the USA outside the League, and the desire to keep Italy against Hitler.',
  hist: 'Many historians see Abyssinia, not Manchuria, as the moment the League died, because this time the aggression happened on Europe’s doorstep and the League had the means to act.'
},
{
  id: 'hoarelaval', lv: 'both', date: 'December 1935', title: 'The Hoare–Laval Plan',
  ldr: 'avenol', speaker: 'laval',
  said: 'A quiet word with the Duce, a few square miles of desert… and peace is saved.',
  brief: 'Britain and France both want the war in Abyssinia over before Mussolini drifts towards Hitler. In December 1935 the British Foreign Secretary, Sir Samuel Hoare, and the French Prime Minister, Pierre Laval, meet in Paris. The fighting goes on, and so do the limited sanctions.',
  ask: 'What do Britain and France do?',
  opts: [
    { t: 'Add oil to the sanctions to force Italy to stop.', x: 'An oil embargo was debated but never imposed. Laval in particular would not risk it.' },
    { t: 'Secretly offer Mussolini about two-thirds of Abyssinia to end the war.' },
    { t: 'Lift sanctions and recognise Italy’s conquests.', x: 'Too blatant in December 1935. The secret plan was their attempt to reach the same result quietly.' },
    { t: 'Ask the United States to join an oil embargo.', a: true, x: 'President Roosevelt called for a “moral embargo”, but US oil exports to Italy actually rose.' }
  ],
  ans: 1,
  out: 'The Hoare–Laval Plan offered Italy large parts of Abyssinia. It leaked to the French press. There was outrage in Britain: Hoare had to resign, and Laval fell in January 1936. The League’s credibility was shattered: its two leading members had tried to reward the aggressor.',
  head: 'SECRET DEAL TO CARVE UP ABYSSINIA LEAKED!',
  fx: { auth: -16, tens: 8, mark: [{ id: 'paris', kind: 'fail', label: 'Hoare–Laval 1935' }] },
  focus: [8, 30, 3],
  exam: 'Shows that Britain and France put self-interest before the Covenant. It badly damaged trust in the League.',
  hist: 'The public reaction, especially in Britain, shows how strong support for the League still was among voters, even as governments gave up on it.'
},
{
  id: 'rhineland', lv: 'both', date: 'March 1936', title: 'The Rhineland',
  ldr: 'avenol', speaker: 'hitler',
  said: 'Germany offers peace — twenty-five years of it! Only, our soldiers stay on the Rhine.',
  brief: 'While the world watches Abyssinia, German troops march into the demilitarised Rhineland on 7 March 1936. This breaks both the Treaty of Versailles and the Locarno Treaties. France has an election coming and will not act without Britain. Many Britons say Germany is only “going into its own back garden”.',
  ask: 'How does the League Council respond?',
  opts: [
    { t: 'Condemn Germany for breaking its treaties, but take no action.' },
    { t: 'Impose economic sanctions on Germany.', x: 'With sanctions on Italy already failing, there was no appetite for new ones against Germany.' },
    { t: 'Back the French army in throwing the Germans out.', x: 'France would not move without Britain, and Britain would not fight over the Rhineland.' },
    { t: 'Accept Hitler’s offer of a 25-year non-aggression pact instead.', a: true, x: 'Hitler did make the offer, but nobody signed. It was a smokescreen.' }
  ],
  ans: 0,
  out: 'The Council, meeting in London, condemned Germany’s breach of its treaties, and did nothing else. German troops stayed. Hitler later called the 48 hours after the march “the most nerve-racking” of his life.',
  head: 'REICH TROOPS ON THE RHINE — PARIS AND LONDON PROTEST',
  fx: { auth: -10, tens: 12, own: { rhineland: 'de' }, mark: [{ id: 'rhineland', kind: 'war', label: 'Rhineland 1936' }] },
  focus: [7.5, 50.3, 9],
  exam: 'Link the Rhineland to Abyssinia: the League’s weakness over Italy encouraged Hitler’s gamble.',
  hist: 'Historians disagree over whether France could have stopped Hitler in 1936. French generals overestimated German strength, and British opinion would not support war.'
},
{
  id: 'sanctionsend', lv: 'both', date: 'July 1936', title: 'It Is Us Today',
  ldr: 'avenol', speaker: 'selassie',
  said: 'It is us today. It will be you tomorrow.',
  saidReal: 'attr',
  brief: 'Italian forces, using aircraft and poison gas, captured Addis Ababa in May 1936. Italy has annexed Abyssinia, and Haile Selassie is in exile. In June he speaks to the League Assembly in Geneva, while Italian journalists jeer from the gallery. Sanctions are still in place.',
  ask: 'What does the League do?',
  opts: [
    { t: 'Impose oil sanctions now to reverse the conquest.', x: 'It was too late. The war was over and nobody would fight to reverse it.' },
    { t: 'Lift sanctions and accept that the League has failed.' },
    { t: 'Expel Italy from the League.', x: 'The League never expelled Italy. Mussolini left of his own accord in December 1937.' },
    { t: 'Keep sanctions on indefinitely as a matter of principle.', a: true, x: 'Members were already drifting away from sanctions. Britain proposed ending them in June 1936.' }
  ],
  ans: 1,
  out: 'In July 1936 the League lifted sanctions. Abyssinia had been abandoned. From then on the great crises of 1938–39, Austria, Munich and Poland, were handled outside Geneva. The League’s last significant act was to expel the USSR in December 1939, after it attacked Finland.',
  head: 'SANCTIONS LIFTED — LEAGUE’S DARKEST HOUR',
  fx: { auth: -14, tens: 10, own: { abyssinia: 'it' }, mark: [{ id: 'addis', kind: 'fail', label: 'Abyssinia lost 1936' }] },
  focus: [38, 12, 4],
  exam: 'The end of collective security. After Abyssinia, small states no longer trusted the League to protect them.',
  hist: 'Zara Steiner and Ruth Henig both argue that the League did not so much fail as get failed by its most powerful members.'
}
];
