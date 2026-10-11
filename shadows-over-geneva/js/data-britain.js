// BRITAIN campaign — the player advises successive British governments.
// motive = "Why Britain chose this": the reasoning behind the historical decision.
window.SCENARIOS = window.SCENARIOS || {};
window.SCENARIOS.britain = [
{
  id: 'parisB', lv: 'both', date: 'March 1919', title: 'Make Germany Pay?',
  ldr: 'lloydgeorge', speaker: 'wilson',
  said: 'A peace of justice, Mr Lloyd George, not a peace of revenge.',
  brief: 'Lloyd George won the December 1918 election with crowds chanting “make Germany pay”. In Paris, Clemenceau wants Germany crushed for good, and President Wilson wants a fair peace built on his Fourteen Points. Lloyd George fears that a treaty which humiliates Germany will only breed another war, or push Germany towards Bolshevism. Britain has already got much of what it wanted: the German fleet is in British hands and Germany’s colonies are up for grabs.',
  ask: 'What line does Lloyd George take?',
  opts: [
    { t: 'Back Clemenceau all the way, including a separate Rhineland state.', x: 'Lloyd George opposed carving up Germany in the west. A permanently divided Germany would be a source of endless trouble, and it would make France too strong on the continent.' },
    { t: 'Push for moderate terms in Europe, while securing Germany’s navy, colonies and reparations for Britain.' },
    { t: 'Side fully with Wilson and drop reparations altogether.', x: 'British voters had been promised that Germany would pay. Lloyd George could not abandon reparations without wrecking his government.' },
    { t: 'Walk out and leave France and America to make the treaty.', a: true, x: 'Britain had too much at stake, from the colonies to the balance of power in Europe, to leave the table.' }
  ],
  ans: 1,
  out: 'In his Fontainebleau Memorandum (March 1919) Lloyd George warned against a peace that would leave Germany bitter. He helped block a separate Rhineland state, made Danzig a Free City rather than Polish, and later won a plebiscite for Upper Silesia. But Britain also took German colonies as mandates, saw the German fleet destroyed, and insisted on reparations, including war pensions, which raised the bill.',
  head: 'LLOYD GEORGE: “STERN BUT NOT VINDICTIVE”',
  fx: { tens: 4, mark: [{ id: 'versailles', kind: 'deal', label: 'Versailles 1919' }] },
  focus: [2, 49, 6],
  exam: 'For “Were the treaties fair?”, compare the aims of the Big Three. Lloyd George was caught between public opinion and his own fear of a vengeful peace.',
  hist: 'Margaret MacMillan argues that Lloyd George was the most flexible of the Big Three: he wanted a lasting balance in Europe, not French dominance.',
  motive: 'Britain’s interests were global, not continental. Once the German navy and colonies were gone, Britain needed Germany as a trading partner and a counterweight to France, not as a ruin. But an election promise to “make Germany pay” limited how generous Lloyd George could be.'
},
{
  id: 'washington', lv: 'a', date: 'February 1922', title: 'The Washington Naval Treaty',
  ldr: 'lloydgeorge', speaker: 'hughes',
  said: 'Let us stop building battleships, gentlemen. All of us. Today.',
  brief: 'The United States has called a naval conference in Washington. It proposes a ten-year halt on building battleships and fixed ratios between the navies of the great powers. For centuries Britain has insisted its navy must be the largest in the world. But Britain is deeply in debt to America and cannot afford a naval race. The USA and Canada also want Britain to end its alliance with Japan.',
  ask: 'What does Britain agree to?',
  opts: [
    { t: 'Refuse limits and keep building, to stay the world’s greatest navy.', x: 'Britain could not afford it. War debts and high taxes made a race with the far richer USA unwinnable.' },
    { t: 'Accept equality in battleships with the USA, and replace the Japanese alliance with a looser four-power pact.' },
    { t: 'Renew the Anglo-Japanese alliance and accept second place to America.', x: 'The USA and Canada saw the Japanese alliance as aimed at America. Keeping it would have soured relations with Washington.' },
    { t: 'Ask the League of Nations to decide naval limits.', x: 'The conference was an American initiative outside the League. The USA was not a member.' }
  ],
  ans: 1,
  out: 'Under the Five-Power Treaty (February 1922) Britain and the USA accepted equal battleship fleets, with Japan at three-fifths and France and Italy smaller still. The Anglo-Japanese alliance was replaced by a vague Four-Power Treaty. Britain kept good relations with America, but Japan felt slighted.',
  head: 'BRITANNIA SHARES THE WAVES',
  fx: { tens: -6, auth: 2, mark: [{ id: 'washington', kind: 'deal', label: 'Washington 1922' }] },
  focus: [-40, 40, 2],
  exam: 'A successful disarmament agreement, but made outside the League, which shows the League was not the only route to peace.',
  hist: 'Some historians see the end of the Japanese alliance as a long-term mistake that left Britain’s Far Eastern empire exposed in the 1930s.',
  motive: 'Money. After 1918 Britain could not afford to out-build the United States, and friendship with America mattered more than a Japanese alliance or the old principle of naval supremacy.'
},
{
  id: 'ruhrB', lv: 'both', date: 'January 1923', title: 'France Marches into the Ruhr',
  ldr: 'bonarlaw', speaker: 'poincare',
  said: 'Germany will not pay? Then France will collect, ton by ton, in coal.',
  brief: 'France and Belgium send troops into the Ruhr to seize coal after Germany falls behind on reparations. Britain voted against declaring Germany in default. British officials think the occupation is economically foolish: a ruined Germany cannot buy British goods. But France is Britain’s wartime ally, and Bonar Law’s government does not want an open split.',
  ask: 'How does Britain respond?',
  opts: [
    { t: 'Join the occupation to keep the alliance with France.', x: 'Britain thought the occupation would only make Germany poorer and less able to pay. It refused to take part.' },
    { t: 'Disapprove and stay out, without taking any action against France.' },
    { t: 'Threaten France with sanctions unless it withdraws.', x: 'Britain would not break with its main ally over Germany, however much it disliked the policy.' },
    { t: 'Take the occupation to the League Council.', a: true, x: 'Britain avoided turning a quarrel with France into a League case. The crisis was eventually solved by the Dawes Plan, outside the League.' }
  ],
  ans: 1,
  out: 'Britain stood aside, in what was called “benevolent neutrality” towards Germany. In August 1923 the Foreign Secretary, Lord Curzon, said the occupation was not authorised by the Treaty of Versailles, but Britain did nothing to stop it. The split weakened the Anglo-French partnership on which the League depended.',
  head: 'BRITAIN STANDS ASIDE AS FRENCH TAKE THE RUHR',
  fx: { tens: 8, auth: -4, own: { ruhr: 'fr' }, mark: [{ id: 'ruhr', kind: 'war', label: 'Ruhr 1923' }] },
  focus: [5, 51, 6],
  exam: 'Shows that Britain and France already disagreed about how to treat Germany in the 1920s.',
  hist: 'Sally Marks argues that British sympathy for Germany over reparations encouraged German resistance to paying.',
  motive: 'Britain wanted German trade revived, not German industry occupied. It also feared France was trying to dominate Europe. But Britain was not willing to break with France openly.'
},
{
  id: 'protocolB', lv: 'a', date: 'March 1925', title: 'The Geneva Protocol',
  ldr: 'chamberlainA', speaker: 'macdonald',
  said: 'Arbitration, security, disarmament. The Protocol gives the League its teeth.',
  brief: 'Ramsay MacDonald’s Labour government backed the Geneva Protocol in 1924. All disputes would go to arbitration, and every member would have to act against an aggressor. Now the Conservatives are in power. Austen Chamberlain, the new Foreign Secretary, must decide whether Britain ratifies. The Dominions, especially Canada, strongly oppose new commitments, and the Royal Navy would carry most of the burden of any sanctions.',
  ask: 'What does Britain do?',
  opts: [
    { t: 'Ratify the Protocol.', x: 'The Conservatives feared open-ended commitments that could drag Britain into wars anywhere in the world.' },
    { t: 'Reject it, and look for a narrower deal covering only western Europe.' },
    { t: 'Ratify it, but only for disputes in Europe.', x: 'Chamberlain wanted no part of the Protocol. The narrower deal he wanted came outside it, at Locarno.' },
    { t: 'Propose a standing League army instead.', x: 'Britain was the least willing of all to put troops under League command.' }
  ],
  ans: 1,
  out: 'In March 1925 Chamberlain told the League Council that Britain would not ratify. The Protocol died. Instead he worked for the Locarno Treaties, which committed Britain only to Germany’s western borders.',
  head: 'CHAMBERLAIN SAYS NO TO GENEVA PROTOCOL',
  fx: { auth: -6, tens: 2, mark: [{ id: 'geneva', kind: 'fail', label: 'Protocol rejected 1925' }] },
  focus: [4, 49, 5],
  exam: 'A key reason collective security stayed weak: its most important member would not accept automatic obligations.',
  hist: 'E. H. Carr called interwar faith in collective security “utopian”. Others defend Chamberlain’s choice of limited commitments he could actually honour.',
  motive: 'Britain had an empire to defend and Dominions that did not want to fight European wars. Its leaders wanted commitments that were limited and clear, never automatic.'
},
{
  id: 'locarnoB', lv: 'both', date: 'October 1925', title: 'Locarno',
  ldr: 'chamberlainA', speaker: 'briand',
  said: 'France needs more than words, Sir Austen. Will Britain stand by us on the Rhine?',
  brief: 'Germany has offered to guarantee its western border with France and Belgium. France wants Britain to guarantee it too, and also wants protection for its allies in the east, Poland and Czechoslovakia. Chamberlain has said privately that for the Polish Corridor no British government will ever risk “the bones of a British grenadier”. Germany will not accept its eastern borders as permanent.',
  ask: 'What does Britain guarantee?',
  opts: [
    { t: 'Germany’s western borders with France and Belgium, but not its eastern borders.' },
    { t: 'All of Germany’s borders, east and west.', x: 'Britain would not fight for Poland or Czechoslovakia in 1925. The eastern borders were left to arbitration.' },
    { t: 'Nothing. Leave France and Germany to sort it out.', x: 'Chamberlain saw a western guarantee as the best way to calm France and bring Germany back into Europe.' },
    { t: 'A full military alliance with France.', a: true, x: 'Britain avoided a one-sided alliance. Locarno guaranteed both sides, so Britain would act against whichever country broke it.' }
  ],
  ans: 0,
  out: 'At Locarno Britain and Italy guaranteed the Franco-German and Belgian-German borders and the demilitarised Rhineland. In the east there were only arbitration treaties. Chamberlain won the Nobel Peace Prize, and Germany joined the League the next year.',
  head: 'LOCARNO! BRITAIN GUARANTEES THE RHINE',
  fx: { tens: -10, auth: 6, own: { ruhr: null }, mark: [{ id: 'locarno', kind: 'deal', label: 'Locarno 1925' }] },
  focus: [8, 48, 5],
  exam: 'Locarno improved relations, but left Germany’s eastern borders open to change. Britain had shown it cared about the west, not the east.',
  hist: 'Sally Marks calls the Locarno years an “illusion of peace”. Others see them as the best chance of reconciliation in the interwar period.',
  motive: 'Britain wanted to calm France and bring Germany back into Europe without taking on commitments it could not keep. The Rhine mattered to Britain’s own security; Poland did not.'
},
{
  id: 'manchuriaB', lv: 'both', date: 'Autumn 1931', title: 'Trouble in Manchuria',
  ldr: 'macdonald', speaker: 'matsuoka',
  said: 'Japan acts only to restore order. Britain, of all nations, understands empire.',
  brief: 'The Japanese army has seized Manchuria, and China appeals to the League. Britain is the League’s leading member, but it has just been forced off the gold standard, unemployment is near three million, and the new National Government is cutting spending. The Royal Navy’s great base at Singapore is unfinished. Britain trades heavily with Japan.',
  ask: 'What line does Britain take at Geneva?',
  opts: [
    { t: 'Demand economic sanctions against Japan.', x: 'Without the USA, sanctions would hurt British trade far more than Japan, and Britain could not defend its Far Eastern empire if Japan hit back.' },
    { t: 'Send the Royal Navy to the Far East.', x: 'Britain had neither the ships nor the bases to fight Japan in 1931.' },
    { t: 'Back a League commission of inquiry, and avoid any sanctions.' },
    { t: 'Recognise Manchukuo and side with Japan openly.', a: true, x: 'Britain would not openly break the Covenant. It backed the Lytton Report, which refused to recognise Manchukuo.' }
  ],
  ans: 2,
  out: 'Britain backed the Lytton Commission and accepted its report, but proposed no sanctions. The Foreign Secretary, Sir John Simon, was accused of being too friendly to Japan. A short-lived British arms embargo in 1933 covered both China and Japan. Japan kept Manchuria and left the League.',
  head: 'LONDON SAYS: “LET LORD LYTTON INVESTIGATE”',
  fx: { tens: 10, auth: -14, own: { manchuria: 'jp' }, mark: [{ id: 'mukden', kind: 'war', label: 'Manchuria 1931' }] },
  focus: [118, 40, 3],
  exam: 'Use Britain’s position to explain the League’s failure: its leading member was distracted by the Depression and too weak in the Far East.',
  hist: 'Christopher Thorne argues that Britain’s options were genuinely limited: the failure was one of power, not just of will.',
  motive: 'The Depression made sanctions unthinkable, and Britain could not defend its Asian empire against Japan. Manchuria was far away, and Britain’s leaders preferred caution to a war they could not win.'
},
{
  id: 'macdonaldplan', lv: 'a', date: 'March 1933', title: 'The MacDonald Plan',
  ldr: 'macdonald', speaker: 'hitler',
  said: 'Equality, Prime Minister. Either the others disarm, or Germany rearms.',
  brief: 'The World Disarmament Conference is stuck. Germany demands equality with France; France refuses to disarm without new guarantees of its security. Hitler has just become Chancellor. Many in Britain think Germany’s complaint is fair: Versailles disarmed Germany and promised that others would follow.',
  ask: 'What does Britain propose?',
  opts: [
    { t: 'A plan to cut the armies of France and Germany to equal size, about 200,000 men each at home.' },
    { t: 'A British guarantee to defend France if Germany attacks.', x: 'This was what France wanted, and exactly what Britain would not give.' },
    { t: 'Sanctions against Germany for its secret rearmament.', x: 'Britain had some sympathy for Germany’s demand for equality and no wish to punish it.' },
    { t: 'Leave the conference to the French and Germans.', x: 'Britain hoped to save the conference, and MacDonald personally put forward a plan.' }
  ],
  ans: 0,
  out: 'The MacDonald Plan (March 1933) proposed equal armies for France and Germany, with France keeping extra forces overseas. France resisted, and Germany wanted more. In October 1933 Hitler left the conference and the League, and the plan died.',
  head: 'MACDONALD’S PLAN: EQUAL ARMIES FOR FRANCE AND GERMANY',
  fx: { tens: 8, auth: -8, mark: [{ id: 'geneva', kind: 'fail', label: 'Disarmament fails 1933' }] },
  focus: [5, 49, 5],
  exam: 'Shows Britain’s belief that Germany had real grievances, the attitude that later became appeasement.',
  hist: 'Historians debate whether the plan was realistic: it asked France to give up the military advantage that was its main guarantee of safety.',
  motive: 'Many in Britain believed Versailles had been too harsh and that a satisfied Germany would be a peaceful one. Disarmament was also popular, and cheaper than rearming.'
},
{
  id: 'stresaB', lv: 'both', date: 'April 1935', title: 'Stresa',
  ldr: 'macdonald', speaker: 'mussolini',
  said: 'We three stand together against Hitler. And Africa… need not trouble us here.',
  brief: 'Hitler has announced conscription and an air force, in defiance of Versailles, and the Saar has just voted to rejoin Germany. Britain, France and Italy meet at Stresa. Italian troops are being shipped to Africa for a war on Abyssinia. Britain badly wants Mussolini on its side against Hitler.',
  ask: 'What does Britain do at Stresa?',
  opts: [
    { t: 'Join the Stresa Front against German rearmament, and say nothing about Abyssinia.' },
    { t: 'Warn Mussolini that an attack on Abyssinia would end the Stresa Front.', x: 'Neither Britain nor France raised Abyssinia with Mussolini at the conference. They feared losing him.' },
    { t: 'Refuse to join any front against Germany.', x: 'Britain joined the protest, though two months later it signed a naval agreement with Germany.' },
    { t: 'Propose a military alliance with France and Italy.', a: true, x: 'The Stresa Front was a statement, not an alliance. Britain did not want new military commitments.' }
  ],
  ans: 0,
  out: 'The Stresa Front condemned German rearmament and promised to uphold Locarno and Austrian independence. The final statement spoke of peace “in Europe”. Britain said nothing about Abyssinia, and Mussolini took this as consent.',
  head: 'STRESA: BRITAIN, FRANCE AND ITALY STAND TOGETHER',
  fx: { tens: -2, own: { saar: 'de' }, mark: [{ id: 'stresa', kind: 'deal', label: 'Stresa 1935' }, { id: 'saar', kind: 'deal', label: 'Saar returns 1935' }] },
  focus: [9, 46, 6],
  exam: 'Explains why Britain later hesitated over sanctions against Italy: it wanted Mussolini as an ally against Hitler.',
  hist: 'The silence over Abyssinia at Stresa is often seen as a fatal mistake that encouraged Mussolini.',
  motive: 'Germany was the bigger danger. Keeping Italy friendly mattered more to British leaders than the fate of a distant African state.'
},
{
  id: 'navalB', lv: 'both', date: 'June 1935', title: 'The Naval Agreement',
  ldr: 'baldwin', speaker: 'ribbentrop',
  said: 'Thirty-five per cent of your navy, and not a ship more. Take it or leave it.',
  brief: 'Stanley Baldwin has just become Prime Minister. Hitler offers to limit the German navy to 35% of the Royal Navy’s surface fleet. Germany is going to rearm anyway, and Britain fears a repeat of the pre-1914 naval race, while also facing Japan in the Pacific. Signing would mean accepting a breach of Versailles, two months after condemning one at Stresa.',
  ask: 'What does Britain do?',
  opts: [
    { t: 'Refuse, because it breaks Versailles.', x: 'Britain judged that a limit on German shipbuilding was better than no limit at all.' },
    { t: 'Sign the Anglo-German Naval Agreement, without consulting France or Italy.' },
    { t: 'Sign only after France and Italy agree.', x: 'Britain did not consult its Stresa partners. That was part of the damage the agreement did.' },
    { t: 'Demand German naval equality with France instead.', a: true, x: 'The 35% ratio was Hitler’s own offer, and Britain accepted it as it stood.' }
  ],
  ans: 1,
  out: 'The Anglo-German Naval Agreement was signed on 18 June 1935. France and Italy were furious that Britain had made a separate deal with Hitler. The Stresa Front was badly damaged, and Britain had in effect approved German rearmament.',
  head: 'BRITAIN SIGNS NAVAL PACT WITH HITLER',
  fx: { tens: 6, auth: -4, mark: [{ id: 'london', kind: 'deal', label: 'Naval Agreement 1935' }] },
  focus: [2, 52, 5],
  exam: 'An early example of appeasement, and of Britain and France acting separately.',
  hist: 'R. A. C. Parker sees the agreement as a serious blunder that legitimised German rearmament and divided Hitler’s opponents.',
  motive: 'Britain’s navy was stretched across a world empire. A guaranteed limit on the German fleet seemed a practical gain, and British leaders thought Germany would rearm whatever they said.'
},
{
  id: 'sanctionsB', lv: 'both', date: 'November 1935', title: 'Sanctions on Italy',
  ldr: 'baldwin', speaker: 'selassie',
  said: 'Britain has promised “collective resistance”. My people are waiting to see it.',
  brief: 'Italy has invaded Abyssinia. A general election is due on 14 November, and the Peace Ballot has shown that over ten million Britons support economic sanctions against an aggressor. Hoare, the Foreign Secretary, has promised at Geneva that Britain will stand for “collective resistance”. But the Chiefs of Staff warn that war with Italy in the Mediterranean would leave Britain dangerously weak against Germany and Japan.',
  ask: 'What sanctions does Britain support?',
  opts: [
    { t: 'Oil sanctions and closing the Suez Canal.', x: 'This risked war with Italy, which Britain’s military chiefs and the French government both wanted to avoid.' },
    { t: 'Limited sanctions on arms, loans and Italian imports, but not oil, and keep the Suez Canal open.' },
    { t: 'No sanctions at all, to keep Mussolini friendly.', x: 'With an election and the Peace Ballot, the government could not be seen to abandon the League.' },
    { t: 'A naval blockade of Italy by the Royal Navy alone.', a: true, x: 'Britain would only act together with the League, and never without France.' }
  ],
  ans: 1,
  out: 'Baldwin won the election on a pro-League platform. From 18 November limited sanctions applied, but oil was not included and the Suez Canal stayed open. The sanctions angered Mussolini without stopping his war.',
  head: 'SANCTIONS — BUT OIL STILL FLOWS TO ITALY',
  fx: { tens: 10, auth: -8, mark: [{ id: 'addis', kind: 'war', label: 'Abyssinia 1935' }] },
  focus: [25, 25, 3],
  exam: 'Explain the gap between British public support for the League and the government’s fear of war.',
  hist: 'Many historians see Abyssinia as the real death of the League, because this time the League had the means to act and Britain and France chose not to use them.',
  motive: 'The government had to look loyal to the League to win the election, but its military advisers said Britain could not afford a war with Italy. Limited sanctions satisfied voters without risking war.'
},
{
  id: 'hoarelavalB', lv: 'both', date: 'December 1935', title: 'A Deal in Paris',
  ldr: 'baldwin', speaker: 'laval',
  said: 'Give the Duce a little of Abyssinia, Sir Samuel, and we keep him from Hitler.',
  brief: 'The war in Abyssinia drags on, and talk of oil sanctions is growing. On his way to a holiday in Switzerland, Sir Samuel Hoare stops in Paris to see Pierre Laval. Both men want the war ended quickly and quietly. France is even less willing than Britain to push Mussolini towards Hitler.',
  ask: 'What do Hoare and Laval agree?',
  opts: [
    { t: 'To impose oil sanctions together.', x: 'Laval would not agree, and Hoare feared that oil sanctions meant war.' },
    { t: 'A secret plan to give Italy about two-thirds of Abyssinia.' },
    { t: 'To refer the whole matter back to the League.', x: 'They were trying to end the war outside the League’s slow procedures.' },
    { t: 'To send Anglo-French troops to protect Addis Ababa.', a: true, x: 'Neither country was prepared to fight Italy.' }
  ],
  ans: 1,
  out: 'The Hoare–Laval Plan leaked to the French press within days. The British public was outraged that the government had tried to reward the aggressor a month after winning an election on support for the League. Hoare resigned, and Anthony Eden replaced him. The plan was dropped, but so was any idea of oil sanctions.',
  head: 'HOARE RESIGNS OVER SECRET ABYSSINIA DEAL',
  fx: { tens: 8, auth: -16, mark: [{ id: 'paris', kind: 'fail', label: 'Hoare–Laval 1935' }] },
  focus: [8, 30, 3],
  exam: 'The plan destroyed trust in Britain and France as defenders of the League.',
  hist: 'The outrage over Hoare–Laval shows how strong support for the League still was among British voters, even as their government gave up on it.',
  motive: 'Hoare believed the League could not save Abyssinia, and that a deal was better than a long war that drove Italy into Hitler’s arms. He misjudged how the public would react.'
},
{
  id: 'rhinelandB', lv: 'both', date: 'March 1936', title: 'Their Own Back Garden',
  ldr: 'baldwin', speaker: 'hitler',
  said: 'Germany offers peace — twenty-five years of it! Only, our soldiers stay on the Rhine.',
  brief: 'German troops have marched into the demilitarised Rhineland. Under Locarno, Britain is a guarantor. Many Britons say the Germans are only “going into their own back garden”. France asks what Britain will do, but makes clear it will not act alone. Britain has barely begun to rearm, and Hitler is offering new peace pacts.',
  ask: 'How does Britain respond?',
  opts: [
    { t: 'Back French military action to expel the Germans.', x: 'There was no support in Britain for war over the Rhineland, and Britain had few forces ready.' },
    { t: 'Condemn the move, restrain France, and offer talks.' },
    { t: 'Impose sanctions on Germany through the League.', x: 'Sanctions on Italy were already failing, and Britain had no appetite for more.' },
    { t: 'Sign Hitler’s offer of a 25-year non-aggression pact.', a: true, x: 'Britain explored Hitler’s offer, but nothing was signed.' }
  ],
  ans: 1,
  out: 'Britain condemned the breach of Versailles and Locarno, but urged France not to act, and offered staff talks instead. The Rhineland stayed German. Hitler had gambled and won.',
  head: 'BRITAIN: “NO CASE FOR WAR OVER RHINELAND”',
  fx: { tens: 12, auth: -8, own: { rhineland: 'de' }, mark: [{ id: 'rhineland', kind: 'war', label: 'Rhineland 1936' }] },
  focus: [5, 50, 6],
  exam: 'A key example of appeasement. Explain why British opinion saw Hitler’s move as reasonable.',
  hist: 'Historians argue over whether stopping Hitler in 1936 was possible. Most agree British opinion would not have supported war.',
  motive: 'Many Britons thought Germany was entitled to station troops on its own soil. Britain was unprepared, distracted by Abyssinia, and wanted a settlement with Germany, not a war.'
},
{
  id: 'spainB', lv: 'both', date: 'August 1936', title: 'Civil War in Spain',
  ldr: 'baldwin', speaker: 'franco',
  said: 'Stay out of Spain, gentlemen, and Spain will settle its own affairs.',
  brief: 'Civil war has broken out in Spain between the left-wing Republican government and General Franco’s Nationalists. Germany and Italy are already helping Franco, and Mussolini has just completed his conquest of Abyssinia. France’s new Popular Front government wants to help the Republic but fears a civil war at home. Many British Conservatives distrust the Spanish Republic, and Britain has large investments in Spain.',
  ask: 'What does Britain do?',
  opts: [
    { t: 'Send arms to the Spanish Republic.', x: 'The government distrusted the Republic and feared a wider European war.' },
    { t: 'Back Franco openly.', x: 'Britain would not be seen to support a military rebellion against an elected government.' },
    { t: 'Back a Non-Intervention Agreement, and chair the committee that oversees it in London.' },
    { t: 'Ask the League to send peacekeepers.', a: true, x: 'Spain was handled through the Non-Intervention Committee, outside the League.' }
  ],
  ans: 2,
  out: 'Britain and France organised a Non-Intervention Agreement, signed by 27 countries, and the committee met in London. Germany, Italy and the USSR signed and then ignored it. Franco received far more help than the Republic.',
  head: 'NON-INTERVENTION: BRITAIN KEEPS OUT OF SPAIN',
  fx: { tens: 8, own: { abyssinia: 'it' }, mark: [{ id: 'guernica', kind: 'war', label: 'Spanish Civil War' }, { id: 'addis', kind: 'fail', label: 'Abyssinia conquered 1936' }] },
  focus: [-3, 42, 5],
  exam: 'Non-intervention shows how the democracies avoided confrontation while the dictators acted.',
  hist: 'Critics call non-intervention a farce that helped Franco win. Defenders argue it stopped Spain becoming a European war in 1936.',
  motive: 'Britain’s priority was to keep the war from spreading, and many in government preferred Franco to a left-wing Republic. Non-intervention also kept Britain in step with France.'
},
{
  id: 'eden', lv: 'a', date: 'February 1938', title: 'Chamberlain and Eden',
  ldr: 'nchamberlain', speaker: 'ciano',
  said: 'Rome is ready to talk, Mr Chamberlain. Recognise our empire and we can be friends.',
  brief: 'Neville Chamberlain, Prime Minister since May 1937, believes he can split Mussolini from Hitler through direct talks. The price would be recognising Italy’s conquest of Abyssinia. His Foreign Secretary, Anthony Eden, thinks Mussolini cannot be trusted while Italian troops fight in Spain, and that the League must not be betrayed again.',
  ask: 'What does Chamberlain do?',
  opts: [
    { t: 'Drop the talks to keep Eden.', x: 'Chamberlain was determined to run foreign policy himself.' },
    { t: 'Open talks with Italy; Eden resigns, and an Anglo-Italian Agreement follows.' },
    { t: 'Break off relations with Italy over Spain.', x: 'This was the opposite of Chamberlain’s strategy of reducing the number of Britain’s enemies.' },
    { t: 'Ask the League to approve the talks first.', x: 'By 1938 Chamberlain had little faith in the League as a way of keeping peace.' }
  ],
  ans: 1,
  out: 'Eden resigned on 20 February 1938, and Lord Halifax replaced him. The Anglo-Italian Agreement of April 1938 promised British recognition of Italy’s empire in exchange for Italian withdrawal from Spain after the war. Mussolini drew no closer to Britain.',
  head: 'EDEN QUITS AS CHAMBERLAIN COURTS MUSSOLINI',
  fx: { tens: 4, auth: -6, mark: [{ id: 'rome', kind: 'deal', label: 'Anglo-Italian talks 1938' }] },
  focus: [8, 46, 5],
  exam: 'Shows Chamberlain taking personal control of policy and the turn from the League to direct deals with the dictators.',
  hist: 'R. A. C. Parker argues Chamberlain pursued appeasement actively and stubbornly, overruling doubters such as Eden.',
  motive: 'Chamberlain believed Britain could not fight Germany, Italy and Japan at once, so the answer was to reduce the number of enemies by settling their grievances.'
},
{
  id: 'anschlussB', lv: 'both', date: 'March 1938', title: 'Austria Vanishes',
  ldr: 'nchamberlain', speaker: 'schuschnigg',
  said: 'We yield to force. God protect Austria.',
  saidReal: true,
  brief: 'German troops have marched into Austria, and Hitler has announced the Anschluss, which the Treaty of Versailles forbids. Mussolini, who defended Austria in 1934, has accepted it. Britain has no treaty obligation to Austria, and many Britons see the Austrians as Germans who wish to join Germany.',
  ask: 'What does Britain do?',
  opts: [
    { t: 'Protest strongly, but take no action.' },
    { t: 'Threaten war unless German troops leave.', x: 'Britain had no way of helping Austria and no wish to fight over it.' },
    { t: 'Impose economic sanctions on Germany.', x: 'There was no support for sanctions, and the League had been bypassed.' },
    { t: 'Guarantee Czechoslovakia immediately.', a: true, x: 'Chamberlain refused to give Czechoslovakia a guarantee in March 1938. That came only after Munich, and never took effect.' }
  ],
  ans: 0,
  out: 'Britain protested, and Chamberlain told the Commons that nothing short of force could have stopped it. Britain speeded up its rearmament. Western Czechoslovakia was now surrounded by Germany on three sides.',
  head: 'BRITAIN PROTESTS AS HITLER TAKES AUSTRIA',
  fx: { tens: 12, auth: -6, own: { austria: 'de' }, mark: [{ id: 'vienna', kind: 'war', label: 'Anschluss 1938' }] },
  focus: [14, 48, 6],
  exam: 'Anschluss broke Versailles and went unpunished, another step in appeasement.',
  hist: 'For many Britons the union of German speakers seemed natural, which is why there was little demand to resist it.',
  motive: 'Austria was not a British ally, many Austrians welcomed the union, and Britain was not ready for war. Protest cost nothing; action risked everything.'
},
{
  id: 'munichB', lv: 'both', date: 'September 1938', title: 'Peace for Our Time',
  ldr: 'nchamberlain', speaker: 'mussolini',
  said: 'A conference, Signor Chamberlain. Four powers, one table, at Munich.',
  brief: 'Hitler demands the Sudetenland from Czechoslovakia, and war seems days away. Chamberlain has already flown twice to see Hitler. Britain’s Chiefs of Staff warn the RAF is not ready, the Dominions say they will not fight for Czechoslovakia, and Londoners are digging trenches in the parks against air raids. Then Mussolini proposes a four-power conference at Munich.',
  ask: 'What does Chamberlain do?',
  opts: [
    { t: 'Refuse to negotiate and stand by Czechoslovakia.', x: 'Chamberlain believed Britain could not fight in 1938 and that the Sudeten Germans had a genuine case.' },
    { t: 'Go to Munich and agree to hand the Sudetenland to Germany.' },
    { t: 'Leave France to deal with it alone.', x: 'France would not act without Britain. Chamberlain took the lead himself.' },
    { t: 'Insist on a plebiscite in the Sudetenland first.', a: true, x: 'Plebiscites were discussed, but the Munich Agreement simply handed over the territory.' }
  ],
  ans: 1,
  out: 'At Munich on 29–30 September, Britain, France, Germany and Italy agreed that Germany would take the Sudetenland. Czechoslovakia was not consulted. Chamberlain returned waving a paper signed by Hitler and promised “peace for our time”. Crowds cheered him, but Churchill called it “a total and unmitigated defeat”.',
  head: '“PEACE FOR OUR TIME”',
  fx: { tens: 10, auth: -6, own: { sudetenland: 'de' }, mark: [{ id: 'munich', kind: 'deal', label: 'Munich 1938' }] },
  focus: [10, 50, 5],
  exam: 'The key appeasement question: did Munich buy Britain time to rearm, or did it encourage Hitler? Be ready to argue both sides.',
  hist: 'The “guilty men” view (1940) condemned appeasement. Revisionists stressed Britain’s weakness and lack of allies. Counter-revisionists such as R. A. C. Parker argue Chamberlain had alternatives, such as an alliance with France and the USSR.',
  motive: 'Britain was not ready for war, feared massive bombing of its cities, and lacked support from the Dominions or the USA. Chamberlain also believed the Sudeten Germans had a fair grievance and that Hitler’s aims were limited.'
},
{
  id: 'guaranteeB', lv: 'both', date: 'March 1939', title: 'The Guarantee to Poland',
  ldr: 'nchamberlain', speaker: 'hacha',
  said: 'At one in the morning they told me Prague would be bombed at dawn unless I signed…',
  brief: 'On 15 March 1939 German troops occupied Prague. For the first time Hitler has seized land that is not German. Rumours spread that Poland is next. British opinion has turned sharply: Hitler has broken his word at Munich, and Chamberlain feels personally betrayed.',
  ask: 'What does Britain do?',
  opts: [
    { t: 'Keep appeasing, and ask Hitler for new talks.', x: 'After Prague, Chamberlain and the public no longer trusted Hitler’s promises.' },
    { t: 'Guarantee Poland’s independence, alongside France.' },
    { t: 'Declare war on Germany at once.', x: 'Britain was not ready, and it wanted to deter Hitler, not to start a war.' },
    { t: 'Sign an alliance with the USSR before anything else.', a: true, x: 'Chamberlain distrusted Stalin, and the Poles refused any deal letting Soviet troops onto their soil.' }
  ],
  ans: 1,
  out: 'On 31 March 1939 Chamberlain told the Commons that Britain and France would defend Poland. Britain also introduced conscription in April, the first time in peacetime, and gave guarantees to Romania and Greece after Italy seized Albania.',
  head: 'BRITAIN WILL FIGHT FOR POLAND',
  fx: { tens: 12, own: { bohemia: 'de', memel: 'de' }, mark: [{ id: 'prague', kind: 'war', label: 'Prague 1939' }, { id: 'warsaw', kind: 'deal', label: 'Guarantee 1939' }] },
  focus: [14, 51, 5],
  exam: 'The end of appeasement. Explain why Prague changed British policy when the Sudetenland had not.',
  hist: 'Some historians argue the guarantee was a bluff Britain could not back up in Poland itself. It could only fight Germany in the west.',
  motive: 'Prague proved Hitler wanted more than German-speaking lands. The guarantee was meant to deter him by making it clear that the next attack meant war with Britain and France.'
},
{
  id: 'moscowB', lv: 'both', date: 'August 1939', title: 'The Slow Boat to Moscow',
  ldr: 'nchamberlain', speaker: 'stalin',
  said: 'Britain sends an admiral by cargo ship, with no power to sign. Berlin sends its Foreign Minister by plane.',
  brief: 'An alliance with the USSR could make Britain’s guarantee to Poland real, because only the Red Army can reach Poland quickly. Chamberlain deeply distrusts Stalin, and many in government fear communism almost as much as Nazism. The Poles refuse to let Soviet troops onto their soil. Stalin was left out of Munich.',
  ask: 'How does Britain handle the talks?',
  opts: [
    { t: 'Send the Foreign Secretary to Moscow to sign an alliance quickly.', x: 'Chamberlain never treated the talks as urgent. No senior minister went.' },
    { t: 'Send a low-level military mission by sea, without full powers to sign.' },
    { t: 'Refuse to talk to Stalin at all.', x: 'Under pressure from Parliament and France, Britain did open talks.' },
    { t: 'Force Poland to accept Soviet troops.', a: true, x: 'Britain could not force Poland, the very country it had promised to protect.' }
  ],
  ans: 1,
  out: 'The Anglo-French military mission sailed to Russia on a slow merchant ship and arrived on 11 August. Its leader, Admiral Drax, had no written authority to sign anything. The talks stalled over Poland. On 23 August Stalin signed the Nazi–Soviet Pact with Hitler instead.',
  head: 'STALIN SIGNS WITH HITLER — LONDON STUNNED',
  fx: { tens: 14, mark: [{ id: 'moscow', kind: 'fail', label: 'Nazi–Soviet Pact 1939' }] },
  focus: [25, 54, 4],
  exam: 'Western half-heartedness is one reason Stalin chose Hitler. Use it when explaining the Nazi–Soviet Pact.',
  hist: 'Historians disagree on whether an Anglo-Soviet alliance was ever possible, given mutual suspicion and Poland’s refusal.',
  motive: 'Chamberlain distrusted Stalin, doubted the Red Army’s strength after Stalin’s purges, and could not override Poland’s refusal. Anti-communism ran deep in his government.'
},
{
  id: 'warB', lv: 'both', date: 'September 1939', title: 'The Ultimatum',
  ldr: 'nchamberlain', speaker: 'hitler',
  said: 'Our enemies are small worms. I saw them at Munich.',
  saidReal: true,
  brief: 'At dawn on 1 September 1939, German forces invade Poland. Britain has guaranteed Poland. Mussolini proposes another conference. The House of Commons is in uproar at any sign of delay, and some ministers threaten to resign unless Britain acts.',
  ask: 'What does Britain do?',
  opts: [
    { t: 'Accept Mussolini’s offer of another conference.', x: 'After Prague there would be no second Munich. Parliament would not have allowed it.' },
    { t: 'Send Germany an ultimatum to withdraw, then declare war when it expires.' },
    { t: 'Send the army to Poland.', x: 'Britain had no way of getting an army to Poland. It could only fight Germany in the west.' },
    { t: 'Declare war, but only if France does first.', a: true, x: 'Britain’s ultimatum expired first, at 11 a.m. France followed at 5 p.m.' }
  ],
  ans: 1,
  out: 'Britain’s ultimatum expired at 11 a.m. on 3 September. At 11.15 Chamberlain told the nation on the radio that “this country is at war with Germany”. France followed that afternoon. Britain could do little to help Poland itself.',
  head: 'BRITAIN AT WAR',
  fx: { tens: 30, auth: -10, mark: [{ id: 'warsaw', kind: 'war', label: 'Invasion of Poland 1939' }, { id: 'london', kind: 'war', label: 'War declared 1939' }] },
  focus: [10, 51, 4],
  exam: 'Tie your answer on why peace collapsed together: Hitler’s aims, appeasement, the League’s failure and the Nazi–Soviet Pact.',
  hist: 'A. J. P. Taylor saw the war as the result of miscalculation on all sides. Most historians since stress Hitler’s determination to expand.',
  motive: 'Britain had given its word, and after Prague appeasement was dead in public opinion. To back down again would have destroyed Britain’s credibility and Chamberlain’s government.'
}
];
