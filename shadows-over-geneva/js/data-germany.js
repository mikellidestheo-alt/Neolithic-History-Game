// GERMANY campaign — the player advises each German government in turn.
window.SCENARIOS = window.SCENARIOS || {};
window.SCENARIOS.germany = [
{
  id: 'versailles', lv: 'both', date: 'June 1919', title: 'The Diktat',
  ldr: 'bauer', speaker: 'bauer',
  said: 'Sign, and we are humiliated. Refuse, and they march on Berlin.',
  brief: 'The Allies give the new Chancellor, Gustav Bauer, a deadline: sign, or the war resumes. Their terms are harsh. Germany must accept the War Guilt clause (Article 231), pay reparations, lose all its colonies and about 13% of its land in Europe, and cut its army to 100,000 men. It may not unite with Austria, and the Rhineland must be demilitarised. Germany has not been allowed to negotiate, and the government of Philipp Scheidemann has resigned rather than sign.',
  ask: 'What does Germany do?',
  opts: [
    { t: 'Refuse to sign and resume the war.', x: 'The army chiefs warned that resistance was hopeless. The Allied naval blockade was still starving Germany.' },
    { t: 'Sign the treaty under protest.' },
    { t: 'Insist on face-to-face negotiations first.', x: 'Germany’s written objections were almost all rejected. Only one concession was made: a plebiscite in Upper Silesia.' },
    { t: 'Sign, then announce that Germany will never pay reparations.', a: true, x: 'Weimar governments protested but paid, at least at first. Open defiance would have invited occupation, as 1923 later showed.' }
  ],
  ans: 1,
  out: 'On 28 June 1919, in the Hall of Mirrors at Versailles, German delegates signed. Germans called it a Diktat, a dictated peace. Many blamed the new democratic politicians, the “November Criminals”, a resentment that haunted the Weimar Republic.',
  head: 'GERMANY SIGNS — “A DICTATED PEACE”',
  fx: { tens: 6, mark: [{ id: 'versailles', kind: 'deal', label: 'Versailles 1919' }] },
  focus: [8, 50, 5],
  exam: 'Key question: was the treaty fair? From the German view it was a Diktat: no negotiation, war guilt, reparations and lost land.',
  hist: 'J. M. Keynes called it a “Carthaginian peace” (1919). Margaret MacMillan (Peacemakers, 2001) argues the treaty was less harsh than its reputation, and that later governments, not the treaty, caused the Second World War.'
},
{
  id: 'rapallo', lv: 'a', date: 'April 1922', title: 'Rapallo',
  ldr: 'wirth', speaker: 'rathenau',
  said: 'The Allies treat us as outcasts. So does Moscow. Outcasts may find one another useful.',
  brief: 'At the Genoa economic conference the Western powers want Soviet Russia to repay the Tsar’s debts. Germany and Soviet Russia are both outcasts of the post-war order. The Soviet delegation offers a private deal at nearby Rapallo. Chancellor Joseph Wirth and Foreign Minister Walther Rathenau must decide.',
  ask: 'What does Germany do?',
  opts: [
    { t: 'Join the Western front demanding that Russia repay its debts.', x: 'The Allies offered Germany nothing in return. A separate deal with Moscow gave Berlin room to manoeuvre.' },
    { t: 'Sign a separate treaty with Soviet Russia: diplomatic relations, cancelled claims, closer trade.' },
    { t: 'Walk out of Genoa and isolate Germany completely.', x: 'Isolation was the problem Wirth and Rathenau were trying to solve.' },
    { t: 'Propose a military alliance with Russia against Poland.', a: true, x: 'Rapallo was not an alliance, although secret army co-operation followed, letting the Reichswehr train with banned weapons on Soviet soil.' }
  ],
  ans: 1,
  out: 'The Treaty of Rapallo (16 April 1922) restored relations and cancelled war claims between the two countries. It alarmed Britain and France. Secret co-operation let the German army test tanks, aircraft and gas on Soviet soil. Rathenau was murdered by right-wing extremists that June.',
  head: 'BERLIN AND MOSCOW SHAKE HANDS AT RAPALLO',
  fx: { tens: 4, mark: [{ id: 'rapallo', kind: 'deal', label: 'Rapallo 1922' }] },
  focus: [14, 48, 4],
  exam: 'Shows Germany breaking out of isolation early, and the start of secret evasion of Versailles.',
  hist: 'Historians debate whether Rapallo was a turning point or a tactical move. It certainly deepened French distrust of Germany.'
},
{
  id: 'ruhr', lv: 'both', date: 'January 1923', title: 'The Ruhr Occupation',
  ldr: 'cuno', speaker: 'poincare',
  said: 'Germany will not pay? Then France will collect, ton by ton, in coal.',
  brief: 'Germany has fallen behind on reparations deliveries of coal and timber. French and Belgian troops march into the Ruhr, Germany’s industrial heartland, to take goods by force. The army is too small to resist. Chancellor Wilhelm Cuno must respond.',
  ask: 'What does Germany do?',
  opts: [
    { t: 'Order the army to resist the invasion.', x: 'With 100,000 men and no tanks or aircraft, the Reichswehr could not fight France.' },
    { t: 'Order passive resistance: workers strike, and the government prints money to pay them.' },
    { t: 'Pay everything owed at once so that the French leave.', x: 'Germany could not, or would not, pay. That was the cause of the crisis.' },
    { t: 'Appeal to the League of Nations.', a: true, x: 'Germany was not a member, and France sat on the Council. The occupation was never brought before it.' }
  ],
  ans: 1,
  out: 'Workers in the Ruhr went on strike. French troops shot some protesters and expelled about 150,000 people. To pay the strikers the government printed money, and hyperinflation exploded. By November 1923 one US dollar cost about 4.2 trillion marks, and middle-class savings were wiped out.',
  head: 'FRENCH TROOPS IN ESSEN — MARK IN FREEFALL',
  fx: { tens: 10, auth: -4, own: { ruhr: 'fr' }, mark: [{ id: 'ruhr', kind: 'war', label: 'Ruhr 1923' }] },
  focus: [7, 51, 9],
  exam: 'The Ruhr crisis shows the bitterness reparations caused, and leads straight into the Dawes Plan.',
  hist: 'Sally Marks argues that Germany could have paid reparations but chose not to. Others stress that the occupation poisoned Franco-German relations and hurt France’s own finances.'
},
{
  id: 'endresist', lv: 'a', date: 'September 1923', title: 'Stresemann’s Hundred Days',
  ldr: 'stresemann', speaker: 'stresemann',
  said: 'Passive resistance has cost us everything. It is time for courage of another kind.',
  brief: 'Gustav Stresemann becomes Chancellor in August 1923. The mark is worthless and the Ruhr is still occupied. Communists and nationalists, including Hitler in Munich, are plotting against the Republic.',
  ask: 'What does Stresemann do?',
  opts: [
    { t: 'Keep passive resistance going at all costs.', x: 'The Reich could no longer afford it. Every week of resistance made inflation worse.' },
    { t: 'Call off passive resistance, promise to resume reparations, and stabilise the currency.' },
    { t: 'Stop all reparations for good.', x: 'That would only have invited further occupation. Stresemann chose “fulfilment”: comply, and win concessions in return.' },
    { t: 'Hand power to the army and rule by decree indefinitely.', a: true, x: 'Emergency decrees were used, and the army crushed risings in Saxony and Bavaria, but Stresemann kept the Republic’s constitution.' }
  ],
  ans: 1,
  out: 'On 26 September 1923 passive resistance was called off. A new currency, the Rentenmark, ended hyperinflation in November. Hitler’s Munich Putsch failed. Stresemann’s government fell after 100 days, but he stayed on as Foreign Minister until his death in 1929.',
  head: 'STRESEMANN ENDS RUHR RESISTANCE',
  fx: { tens: -5 },
  focus: [10, 51, 6],
  exam: 'Shows the start of Stresemann’s policy of “fulfilment”: meet treaty obligations in order to win revision step by step.',
  hist: 'Jonathan Wright (Gustav Stresemann, 2002) calls him a pragmatic nationalist. He wanted revision of Versailles, but by peaceful means.'
},
{
  id: 'dawes', lv: 'both', date: 'April 1924', title: 'The Dawes Plan',
  ldr: 'stresemann', speaker: 'stresemann',
  said: 'American dollars for German factories, and the French out of the Ruhr. A fair bargain.',
  brief: 'An international committee led by the American banker Charles Dawes proposes a plan. Germany’s yearly reparations would be cut to what it can afford, rising over time. Germany would receive a large American loan, 800 million gold marks to start, and French troops would leave the Ruhr. But the total bill would stay the same, and Germany’s railways and central bank would face foreign supervision.',
  ask: 'What does Germany do?',
  opts: [
    { t: 'Accept the Dawes Plan.' },
    { t: 'Reject it, since the total bill has not been reduced.', x: 'The nationalists said this, but Stresemann saw that loans and French withdrawal outweighed the humiliation.' },
    { t: 'Demand that reparations be cancelled completely.', x: 'No Allied government could have agreed in 1924. Cancellation came only in 1932.' },
    { t: 'Accept only if the Rhineland is evacuated immediately.', a: true, x: 'Rhineland evacuation came later, as part of the Young Plan bargain in 1929–30.' }
  ],
  ans: 0,
  out: 'Germany accepted the plan. American money poured in, the economy recovered, and French and Belgian troops left the Ruhr by August 1925. Germany was now dangerously dependent on American loans.',
  head: 'DAWES PLAN SIGNED — DOLLARS FLOW TO BERLIN',
  fx: { tens: -8, auth: 4, own: { ruhr: null }, mark: [{ id: 'ruhr', kind: 'win', label: 'Ruhr evacuated 1925' }] },
  focus: [7, 51, 8],
  exam: 'Part of the 1920s improvement in international relations. It also tied Germany’s recovery to the US economy, with fatal results after 1929.',
  hist: 'The “golden twenties” rested on borrowed money. When US loans were recalled after the Wall Street Crash, the system collapsed.'
},
{
  id: 'locarno', lv: 'both', date: 'October 1925', title: 'Locarno',
  ldr: 'stresemann', speaker: 'briand',
  said: 'Monsieur Stresemann, let us guarantee the Rhine. What of the East?',
  brief: 'At Locarno in Switzerland, Germany, France, Belgium, Britain and Italy meet. Stresemann wants to end Germany’s isolation, get Allied troops out of the Rhineland, and avoid a new occupation. France wants security. Poland and Czechoslovakia want guarantees for their borders with Germany too.',
  ask: 'What does Stresemann agree to?',
  opts: [
    { t: 'Guarantee Germany’s western borders with France and Belgium, but only agree to arbitration over the eastern borders.' },
    { t: 'Guarantee all of Germany’s borders, east and west.', x: 'No German government would accept the Polish border as permanent. Danzig and the Corridor were too bitter a loss.' },
    { t: 'Refuse any guarantees until Alsace-Lorraine is returned.', x: 'That would have ended talks at once. Stresemann accepted the loss of Alsace-Lorraine.' },
    { t: 'Join an anti-Soviet alliance with Britain and France.', a: true, x: 'Stresemann kept ties with Moscow as well. The 1926 Treaty of Berlin renewed Rapallo.' }
  ],
  ans: 0,
  out: 'The Locarno Treaties guaranteed the Franco-German and Belgian-German borders, with Britain and Italy as guarantors. In the east there were only arbitration treaties, leaving revision possible. The “Spirit of Locarno” opened the way to German membership of the League. Stresemann and Briand shared the 1926 Nobel Peace Prize.',
  head: 'LOCARNO! “SPIRIT OF PEACE” OVER EUROPE',
  fx: { tens: -10, auth: 6, mark: [{ id: 'locarno', kind: 'deal', label: 'Locarno 1925' }] },
  focus: [10, 49, 5],
  exam: 'Locarno improved relations, but left eastern borders open. That is one reason Poland and Czechoslovakia felt insecure later.',
  hist: 'Was Stresemann a “good European” or a clever nationalist? His letters suggest he saw Locarno as a step towards revising the eastern borders.'
},
{
  id: 'joinleague', lv: 'both', date: 'September 1926', title: 'A Seat at Geneva',
  ldr: 'stresemann', speaker: 'stresemann',
  said: 'A great power sits at the high table, or not at all.',
  brief: 'Stresemann wants Germany treated as a great power, with a permanent seat on the League Council. After Locarno, Germany is invited to join the League of Nations. Nationalists at home call the League a club of the victors that enforces Versailles, but Stresemann sees a platform for revising the treaty.',
  ask: 'What does Germany do?',
  opts: [
    { t: 'Join the League, with a permanent seat on the Council.' },
    { t: 'Stay out: the League exists to enforce Versailles.', x: 'Stresemann believed Germany could press its case better from inside, for example on minorities and disarmament.' },
    { t: 'Join as an ordinary Assembly member.', x: 'Stresemann insisted on great-power status, and got it.' },
    { t: 'Join only if the colonies are returned first.', a: true, x: 'Colonies were a nationalist demand, but Stresemann did not make them a condition.' }
  ],
  ans: 0,
  out: 'Germany joined in September 1926 with a permanent Council seat. Earlier that year Stresemann had also signed the Treaty of Berlin with the USSR, keeping a door open to the East.',
  head: 'GERMANY JOINS LEAGUE — BRIAND: “AWAY WITH RIFLES!”',
  fx: { tens: -6, auth: 8, mark: [{ id: 'geneva', kind: 'win', label: 'Germany joins 1926' }] },
  focus: [8, 48, 6],
  exam: 'Germany’s entry shows the League at its strongest. Its exit in 1933 shows how fast that changed.',
  hist: 'For Stresemann, Geneva was a stage for revising the treaty peacefully. For his nationalist critics it was surrender.'
},
{
  id: 'kellogg', lv: 'a', date: 'August 1928', title: 'Outlawing War',
  ldr: 'stresemann', speaker: 'kellogg',
  said: 'Sign here, gentlemen: war is renounced as an instrument of national policy.',
  brief: 'The US Secretary of State, Frank Kellogg, and the French Foreign Minister, Aristide Briand, propose a pact renouncing war as a tool of national policy. It has no means of enforcement, but the United States is behind it. Germany is invited to be among the first to sign.',
  ask: 'What does Germany do?',
  opts: [
    { t: 'Sign. Germany is among the first nations to join.' },
    { t: 'Refuse, since the pact has no teeth.', x: 'Signing cost nothing and showed Germany as a peaceful nation, which strengthened its case for revision.' },
    { t: 'Sign only if the Allies first agree to revise the Polish border.', x: 'Stresemann did not tie the pact to territorial demands.' },
    { t: 'Sign with a reservation allowing war to recover lost land.', a: true, x: 'Germany signed without such a reservation. Britain, however, did reserve freedom of action in parts of its Empire.' }
  ],
  ans: 0,
  out: 'Germany signed the Kellogg–Briand Pact in Paris on 27 August 1928, alongside 14 other states; over 60 joined eventually. It had no means of enforcement, but it marked the peak of 1920s optimism.',
  head: 'NATIONS OUTLAW WAR IN PARIS',
  fx: { tens: -5, auth: 3, mark: [{ id: 'paris', kind: 'deal', label: 'Kellogg–Briand 1928' }] },
  focus: [5, 49, 5],
  exam: 'Shows the optimism of the late 1920s, and its weakness: no means of enforcement.',
  hist: 'Often mocked in hindsight, the pact later underpinned the charge of “crimes against peace” at Nuremberg.'
},
{
  id: 'young', lv: 'both', date: 'August 1929', title: 'The Young Plan',
  ldr: 'stresemann', speaker: 'hugenberg',
  said: 'Fifty-nine more years of slavery! Any German who signs is a traitor!',
  brief: 'A committee led by Owen Young proposes a final reparations settlement. The total would be cut and spread over 59 years, until 1988, and the foreign controls over Germany’s economy would end. The Allies would also leave the Rhineland five years early, by 1930. The nationalist Alfred Hugenberg and Adolf Hitler campaign furiously against it. Stresemann is seriously ill.',
  ask: 'What does Germany do?',
  opts: [
    { t: 'Accept the Young Plan, and with it an early Allied withdrawal from the Rhineland.' },
    { t: 'Reject it, as Hugenberg and Hitler demand.', x: 'The government accepted. The nationalists’ referendum against the plan in December 1929 won only 13.8% of the vote.' },
    { t: 'Stop paying reparations completely.', x: 'Stresemann’s method was negotiation. Unilateral default risked another Ruhr.' },
    { t: 'Accept, but only if Germany may rearm.', a: true, x: 'Rearmament was not on the table in 1929. Equality of armaments was pursued later, at the Disarmament Conference.' }
  ],
  ans: 0,
  out: 'The Young Plan was accepted. The last Allied troops left the Rhineland in June 1930. Stresemann died on 3 October 1929. Weeks later the Wall Street Crash began, and the campaign against the plan had already made Hitler a national figure.',
  head: 'STRESEMANN DEAD — RHINELAND TO BE FREED',
  fx: { tens: -2, mark: [{ id: 'rhineland', kind: 'deal', label: 'Allies leave 1930' }] },
  focus: [7, 50, 7],
  exam: 'The last success of Stresemann’s diplomacy. The campaign against it gave the Nazis national publicity just before the Depression.',
  hist: 'The anti-Young Plan campaign linked Hitler to Hugenberg’s press empire and gave the Nazis respectability with the conservative right.'
},
{
  id: 'customs', lv: 'a', date: 'March 1931', title: 'The Customs Union Scheme',
  ldr: 'bruning', speaker: 'bruning',
  said: 'Not an Anschluss, gentlemen. Merely… a customs arrangement.',
  brief: 'The Depression is crushing Germany and Austria. Chancellor Heinrich Brüning wants a foreign-policy success to undercut the Nazis. Versailles and the 1922 Geneva Protocols forbid any union with Austria that threatens its independence. Brüning’s Foreign Minister, Julius Curtius, has a plan.',
  ask: 'What does Germany do?',
  opts: [
    { t: 'Announce an Austro-German customs union.' },
    { t: 'Declare a full political union with Austria.', x: 'An open Anschluss would have meant an immediate crisis with France, Italy and Czechoslovakia. Brüning chose a disguised first step.' },
    { t: 'Ask France for a large loan.', x: 'France was willing to lend only with political conditions Brüning would not accept.' },
    { t: 'Do nothing abroad and focus on the economy.', x: 'Brüning hoped foreign successes would weaken the Nazis, so he went looking for one.' }
  ],
  ans: 0,
  out: 'The customs union plan was announced in March 1931. France protested and used its financial power against Austria. In May the great Viennese bank, the Creditanstalt, collapsed. In September the Hague Court ruled 8–7 that the union broke Austria’s commitments, and the plan was dropped, a humiliation for Brüning.',
  head: 'CUSTOMS UNION VETOED AT THE HAGUE',
  fx: { tens: 5, mark: [{ id: 'vienna', kind: 'fail', label: 'Customs union 1931' }] },
  focus: [14, 49, 7],
  exam: 'Shows that the Depression pushed even moderate German governments towards nationalist foreign policy.',
  hist: 'Historians see Brüning’s foreign policy as more revisionist than Stresemann’s, a bridge between Weimar diplomacy and Hitler’s.'
},
{
  id: 'lausanne', lv: 'a', date: 'July 1932', title: 'Lausanne',
  ldr: 'papen', speaker: 'papen',
  said: 'One final payment, and the word “reparations” dies.',
  brief: 'President Hoover’s moratorium of 1931 has suspended reparations for a year. At Lausanne, Britain and France are ready to end them, in return for one last payment. Chancellor Franz von Papen negotiates for Germany.',
  ask: 'What does Germany agree to?',
  opts: [
    { t: 'Agree to a final payment of 3 billion marks, which ends reparations in practice.' },
    { t: 'Walk out unless reparations are cancelled outright.', x: 'Papen accepted the deal. The final payment was never actually made.' },
    { t: 'Resume full payments under the Young Plan.', x: 'In 1932 Germany had six million unemployed and could not pay.' },
    { t: 'Trade reparations for a promise never to rearm.', a: true, x: 'Germany was demanding the right to equality in arms at the same moment. No such promise was offered.' }
  ],
  ans: 0,
  out: 'At Lausanne reparations were effectively ended in return for a final payment of 3 billion marks, which Germany never paid. Papen won little credit at home, and Hitler took power six months later.',
  head: 'REPARATIONS BURIED AT LAUSANNE',
  fx: { tens: -2, mark: [{ id: 'lausanne', kind: 'deal', label: 'Lausanne 1932' }] },
  focus: [7, 47, 7],
  exam: 'By the time Hitler came to power, reparations, a key grievance against Versailles, had already ended.',
  hist: 'Germany paid only a fraction of the original reparations bill, around 20 billion gold marks by most estimates.'
},
{
  id: 'leaveleague', lv: 'both', date: 'October 1933', title: 'Walking Out',
  ldr: 'hitler', speaker: 'hitler',
  said: 'Germany will not sit at a table as a second-class nation.',
  brief: 'Adolf Hitler has been Chancellor since January 1933. He has promised to tear up Versailles but needs time to rebuild the army. At the World Disarmament Conference, France still refuses to disarm, and new proposals would keep Germany unequal for years.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Stay at the Conference and negotiate patiently for equality.', x: 'Hitler did not want limits on German arms. Negotiation would only have tied his hands.' },
    { t: 'Withdraw from the Disarmament Conference and the League, blaming French refusal to disarm.' },
    { t: 'Announce full rearmament and conscription now.', x: 'Too early. Germany was still weak in 1933, so Hitler waited until March 1935.' },
    { t: 'Invade Poland to recover the Corridor.', a: true, x: 'Unthinkable in 1933. Germany’s army was tiny, and Hitler instead signed a pact with Poland in 1934.' }
  ],
  ans: 1,
  out: 'On 14 October 1933 Germany left both the Disarmament Conference and the League. Hitler presented it as a fight for equal rights. In a referendum that November, about 95% of voters approved.',
  head: 'GERMANY QUITS LEAGUE OF NATIONS',
  fx: { tens: 12, auth: -12, mark: [{ id: 'geneva', kind: 'fail', label: 'Germany leaves 1933' }] },
  focus: [9, 49, 5],
  exam: 'Hitler’s first step against the Versailles system, made to look like a reasonable demand for equality.',
  hist: 'A. J. P. Taylor saw Hitler as a traditional German statesman exploiting grievances. Hugh Trevor-Roper stressed his ideological aims from Mein Kampf.'
},
{
  id: 'polishpact', lv: 'both', date: 'January 1934', title: 'The Polish Pact',
  ldr: 'hitler', speaker: 'pilsudski',
  said: 'A ten-year promise from Berlin? I will believe it when I see it kept.',
  brief: 'Hitler needs time to rearm, and he wants to weaken France’s alliances in the east. Poland is France’s main ally there, and it fears German revenge over the Corridor and Danzig. Marshal Piłsudski has reportedly sounded out Paris about a preventive war against Hitler.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Demand the return of Danzig and the Corridor at once.', x: 'Germany was too weak to back such demands in 1934. Hitler waited until 1938–39.' },
    { t: 'Sign a ten-year non-aggression pact with Poland.' },
    { t: 'Ally with the USSR against Poland.', x: 'That came in August 1939. In 1934 Hitler was loudly anti-Bolshevik.' },
    { t: 'Ask the League to supervise a plebiscite in the Corridor.', a: true, x: 'Germany had just left the League and had no interest in its procedures.' }
  ],
  ans: 1,
  out: 'The German–Polish Non-Aggression Pact was signed on 26 January 1934. It made Hitler look peaceful, unsettled France’s alliance system, and bought time. Hitler broke it in 1939.',
  head: 'BERLIN AND WARSAW PLEDGE TEN YEARS OF PEACE',
  fx: { tens: -3, mark: [{ id: 'warsaw', kind: 'deal', label: 'Polish Pact 1934' }] },
  focus: [18, 52, 6],
  exam: 'An example of Hitler appearing peaceful while preparing to expand.',
  hist: 'Alan Bullock described Hitler as combining consistent long-term aims with tactical flexibility. The Polish pact fits that view well.'
},
{
  id: 'dollfuss', lv: 'both', date: 'July 1934', title: 'Murder in Vienna',
  ldr: 'hitler', speaker: 'mussolini',
  said: 'Four divisions are on the Brenner. Touch Austria and you deal with Italy!',
  brief: 'On 25 July 1934 Austrian Nazis storm the Chancellery in Vienna and murder Chancellor Engelbert Dollfuss. Hitler’s army is still far too weak to fight Italy. Mussolini, Austria’s protector, rushes troops to the Brenner Pass on the Austrian border, and in Vienna the coup collapses.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Send the German army into Austria to support the putsch.', x: 'Italian divisions were waiting at the Brenner. Germany could not risk war in 1934.' },
    { t: 'Disown the putsch and back down.' },
    { t: 'Demand an immediate referendum on Anschluss.', x: 'That had to wait until 1938, after Italy had swung towards Germany.' },
    { t: 'Ask the League to decide Austria’s future.', a: true, x: 'Germany had left the League in 1933.' }
  ],
  ans: 1,
  out: 'Hitler denied any involvement and backed off. He sent Franz von Papen to Vienna as ambassador to soothe relations. Kurt von Schuschnigg became Austrian Chancellor. Hitler learned that he needed Mussolini on his side before he could take Austria.',
  head: 'DOLLFUSS SLAIN — MUSSOLINI MOBILISES, HITLER RETREATS',
  fx: { tens: 6, mark: [{ id: 'vienna', kind: 'crisis', label: 'Dollfuss murdered 1934' }, { id: 'brenner', kind: 'crisis', label: 'Italian troops 1934' }] },
  focus: [13.5, 47.5, 8],
  exam: 'Shows that in 1934 Mussolini was still willing to stand up to Hitler, before Abyssinia pushed Italy towards Germany.',
  hist: 'This failure shows Hitler’s opportunism. He drew back when the risk was high, then struck when conditions changed.'
},
{
  id: 'rearm', lv: 'both', date: 'March 1935', title: 'Rearmament',
  ldr: 'hitler', speaker: 'hitler',
  said: 'The Saar has come home. Now Germany will have the army every free nation has.',
  brief: 'In January 1935 the Saar votes by 90.7% to rejoin Germany, a huge propaganda boost. Germany has been rearming in secret for years. The question now is whether to admit it openly, in defiance of Versailles.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Keep rearming in secret.', x: 'Secrecy limited expansion. Hitler judged that the Allies would protest and do nothing.' },
    { t: 'Announce conscription, an army of 36 divisions (about 550,000 men), and the existence of the Luftwaffe.' },
    { t: 'Ask the League for permission to rearm.', x: 'Germany had left the League. Hitler wanted a fait accompli, not permission.' },
    { t: 'Rearm only at sea, to reassure France.', a: true, x: 'Naval talks with Britain followed, but army and air force rearmament came first.' }
  ],
  ans: 1,
  out: 'In March 1935 Hitler revealed the Luftwaffe and announced conscription. Britain, France and Italy protested at Stresa in April and formed the “Stresa Front”, but nobody acted. In June Britain itself signed a naval agreement with Germany.',
  head: 'HITLER TEARS UP ARMS CLAUSES — CONSCRIPTION RETURNS',
  fx: { tens: 12, auth: -6, own: { saar: 'de' }, mark: [{ id: 'saar', kind: 'deal', label: 'Saar returns 1935' }, { id: 'berlin', kind: 'war', label: 'Rearmament 1935' }] },
  focus: [10, 51, 6],
  exam: 'A direct breach of Versailles that went unpunished. Use it as evidence for the weakness of appeasement and the League.',
  hist: 'Many in Britain thought the military clauses of Versailles were unfair. That sympathy helps explain the mild reaction.'
},
{
  id: 'naval', lv: 'a', date: 'June 1935', title: 'The Anglo-German Naval Agreement',
  ldr: 'hitler', speaker: 'ribbentrop',
  said: 'Thirty-five per cent, take it or leave it. London will take it.',
  brief: 'Hitler wants Britain to approve, in effect, his breach of Versailles, and he has an offer ready: a German navy limited to a fixed ratio of the Royal Navy. Britain fears a naval race like the one before 1914. Hitler sends Joachim von Ribbentrop to London to make the offer.',
  ask: 'What does Germany propose?',
  opts: [
    { t: 'A German surface fleet capped at 35% of the Royal Navy, with submarines at 45%, rising to equality in some circumstances.' },
    { t: 'Full naval equality with Britain.', x: 'Hitler wanted British goodwill, not a naval race, so he offered a ratio Britain could accept.' },
    { t: 'No navy above Versailles limits, in exchange for colonies.', x: 'Hitler had no intention of keeping to Versailles limits.' },
    { t: 'A three-way naval pact including France.', a: true, x: 'France was not consulted. That was part of the damage the agreement did.' }
  ],
  ans: 0,
  out: 'Britain signed in June 1935 without consulting France or Italy, only two months after Stresa. In effect Britain had approved Germany’s breach of Versailles, and the Stresa Front was badly damaged.',
  head: 'LONDON SIGNS NAVAL PACT WITH BERLIN — PARIS FUMES',
  fx: { tens: 5, auth: -4, mark: [{ id: 'london', kind: 'deal', label: 'Naval Agreement 1935' }] },
  focus: [3, 52, 5],
  exam: 'Shows divisions among the Stresa powers that Hitler could exploit.',
  hist: 'R. A. C. Parker and others criticise the agreement as a blunder that legitimised German rearmament.'
},
{
  id: 'rhinelandG', lv: 'both', date: 'March 1936', title: 'Into the Rhineland',
  ldr: 'hitler', speaker: 'hitler',
  said: 'If the French march, we retreat with our tails between our legs.',
  brief: 'Hitler believes France will not move. The Rhineland is still demilitarised under Versailles and Locarno, the world is distracted by Abyssinia, and France is divided ahead of an election. Hitler’s generals warn that the army is not ready to fight France.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Wait until the army is stronger, perhaps 1938.', x: 'Hitler judged the moment ideal while the Abyssinian crisis absorbed Britain and France.' },
    { t: 'March in with a small force under orders to withdraw if France fights back.' },
    { t: 'Invade with the whole army and threaten France.', x: 'Too risky. Hitler’s gamble depended on looking reasonable while offering peace pacts.' },
    { t: 'Negotiate with France for a gradual return of troops.', a: true, x: 'Hitler preferred a sudden fait accompli on a Saturday, with peace proposals released the same day.' }
  ],
  ans: 1,
  out: 'On 7 March 1936 German troops marched into the Rhineland. Hitler offered new peace pacts the same day. France protested but did not act without Britain, and Britain would not fight. Hitler’s confidence and prestige soared.',
  head: 'GERMAN TROOPS CROSS THE RHINE BRIDGES',
  fx: { tens: 12, auth: -8, own: { rhineland: 'de' }, mark: [{ id: 'rhineland', kind: 'war', label: 'Rhineland 1936' }] },
  focus: [7.5, 50.3, 9],
  exam: 'A turning point. Appeasement and the League’s weakness emboldened Hitler.',
  hist: 'The quote in this scene is adapted from Hitler’s later recollection. Taylor saw the move as opportunism; others see it as an early step in a planned programme.'
},
{
  id: 'spainG', lv: 'both', date: 'July 1936', title: 'Spain Burns',
  ldr: 'hitler', speaker: 'franco',
  said: 'My army is trapped in Africa. Send me planes, and I will give you Spain.',
  brief: 'Civil war breaks out in Spain between the left-wing Republican government and Nationalist rebels led by General Franco. Franco’s best troops are stuck in Morocco. He asks Hitler and Mussolini for help. Britain and France propose that all powers stay out.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Send transport planes, then the Condor Legion, to help Franco, while officially backing non-intervention.' },
    { t: 'Stay strictly neutral, as Britain and France ask.', x: 'Germany signed the Non-Intervention Agreement, then ignored it.' },
    { t: 'Send the whole German army openly.', x: 'Hitler wanted a testing ground, not a major war. German forces in Spain were limited to a few thousand at a time.' },
    { t: 'Support the Republic to win French friendship.', a: true, x: 'The Republic was backed by the USSR. Hitler’s anti-communism made that unthinkable.' }
  ],
  ans: 0,
  out: 'German planes airlifted Franco’s troops to Spain. The Condor Legion tested new aircraft and tactics, and bombed Guernica in April 1937. In October 1936 Germany and Italy formed the Rome–Berlin Axis; in November Germany and Japan signed the Anti-Comintern Pact.',
  head: 'GUERNICA BOMBED — GERMAN PLANES BLAMED',
  fx: { tens: 10, auth: -4, mark: [{ id: 'guernica', kind: 'war', label: 'Spanish Civil War 1936–39' }] },
  focus: [0, 44, 5],
  exam: 'Spain drew Germany and Italy together and gave the Luftwaffe combat experience.',
  hist: 'Non-intervention is often criticised as a farce: Britain and France observed it while Germany, Italy and the USSR ignored it.'
},
{
  id: 'anschluss', lv: 'both', date: 'March 1938', title: 'Anschluss',
  ldr: 'hitler', speaker: 'schuschnigg',
  said: 'Let Austrians decide — yes or no, for a free Austria!',
  brief: 'Austrian Nazis are stirring up unrest, and this time Mussolini, now Hitler’s partner, will not defend Austria. In February 1938 Hitler bullies Chancellor Schuschnigg into giving Nazis government posts. Schuschnigg hits back by announcing a surprise referendum on Austrian independence, to be held on 13 March.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Let the referendum go ahead.', x: 'Hitler feared Austrians would vote for independence, so he moved before the vote.' },
    { t: 'Demand that the referendum be cancelled, force Schuschnigg out, and send in German troops.' },
    { t: 'Ask Britain and France to approve a merger first.', x: 'Hitler acted first and presented the world with a fait accompli.' },
    { t: 'Settle for a customs union with Austria.', a: true, x: 'That was Brüning’s 1931 idea. Hitler wanted full annexation.' }
  ],
  ans: 1,
  out: 'Schuschnigg cancelled the referendum and resigned. On 12 March German troops crossed the border to cheering crowds, and Austria was annexed the next day, in breach of Versailles. A Nazi-run plebiscite in April claimed 99.7% approval. Britain and France protested, nothing more.',
  head: 'AUSTRIA ANNEXED — HITLER ENTERS VIENNA',
  fx: { tens: 12, auth: -6, own: { austria: 'de' }, mark: [{ id: 'vienna', kind: 'war', label: 'Anschluss 1938' }] },
  focus: [14, 48, 7],
  exam: 'Anschluss broke Versailles, surrounded western Czechoslovakia on three sides, and showed appeasement in action.',
  hist: 'Was Anschluss planned or improvised? The timing was opportunist, triggered by Schuschnigg, but union with Austria was a goal from page one of Mein Kampf.'
},
{
  id: 'munichG', lv: 'both', date: 'September 1938', title: 'Munich',
  ldr: 'hitler', speaker: 'nchamberlain',
  said: 'A quarrel in a far-away country between people of whom we know nothing…',
  saidReal: true,
  brief: 'Hitler demands the Sudetenland, the border region of Czechoslovakia where three million German speakers live. Czechoslovakia has strong defences and an alliance with France. Neville Chamberlain flies to meet Hitler twice, at Berchtesgaden and Bad Godesberg, where Hitler raises his demands. War seems days away. Then Mussolini proposes a four-power conference at Munich.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Refuse to talk and invade Czechoslovakia.', x: 'Hitler was tempted, but his generals were nervous, Mussolini urged talks, and he was being offered what he had demanded.' },
    { t: 'Accept the Munich Agreement: the Sudetenland is handed over in early October, with no Czech representative present.' },
    { t: 'Drop the demand to avoid war with Britain.', x: 'Hitler did not need to back down: Britain and France were offering him the Sudetenland.' },
    { t: 'Agree to a plebiscite in the Sudetenland under international control.', a: true, x: 'Plebiscites were discussed, but Munich simply handed over the territory. None was held.' }
  ],
  ans: 1,
  out: 'At Munich on 29–30 September 1938, Hitler, Chamberlain, Daladier and Mussolini agreed that Germany would take the Sudetenland. Czechoslovakia was not consulted. Chamberlain returned with a signed note promising “peace for our time”. Czechoslovakia lost its border defences.',
  head: '“PEACE FOR OUR TIME” — SUDETENLAND TO REICH',
  fx: { tens: 10, auth: -6, own: { sudetenland: 'de' }, mark: [{ id: 'munich', kind: 'deal', label: 'Munich 1938' }] },
  focus: [14, 50, 7],
  exam: 'The high point of appeasement. Be ready to argue whether it bought Britain time or encouraged Hitler.',
  hist: 'The “guilty men” view (1940) condemned appeasement. Revisionists stressed Britain’s weakness. Counter-revisionists such as R. A. C. Parker argue Chamberlain had real alternatives. Gerhard Weinberg suggests Hitler felt cheated of the war he wanted.'
},
{
  id: 'prague', lv: 'both', date: 'March 1939', title: 'Prague',
  ldr: 'hitler', speaker: 'hacha',
  said: 'At one in the morning they told me Prague would be bombed at dawn unless I signed…',
  brief: 'What is left of Czechoslovakia is defenceless after Munich. Under German pressure, Slovak nationalists declare independence. Hitler summons the elderly Czech President Emil Hácha to Berlin.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Respect the Munich settlement.', x: 'Munich had only ever been a stage for Hitler. He had called the Sudetenland his “last territorial demand”.' },
    { t: 'Bully Hácha into “inviting” German troops in, and make Bohemia and Moravia a German protectorate.' },
    { t: 'Hand the Czech lands to Hungary and Poland.', x: 'Poland and Hungary did take slices, but Hitler kept Bohemia and Moravia, with their armaments factories, for Germany.' },
    { t: 'Hold a plebiscite in Bohemia.', a: true, x: 'No vote was held, and the Czech majority would never have voted for German rule.' }
  ],
  ans: 1,
  out: 'On 15 March 1939 German troops occupied Prague. For the first time Hitler had seized non-German land. A week later Germany also took Memel from Lithuania. Appeasement was dead: on 31 March Britain and France guaranteed Poland.',
  head: 'NAZI TROOPS IN PRAGUE — APPEASEMENT IS DEAD',
  fx: { tens: 14, auth: -4, own: { bohemia: 'de', memel: 'de' }, mark: [{ id: 'prague', kind: 'war', label: 'Prague 1939' }, { id: 'memel', kind: 'war', label: 'Memel 1939' }] },
  focus: [16, 51, 6],
  exam: 'The turning point that ended appeasement and led to the British guarantee to Poland.',
  hist: 'Even A. J. P. Taylor, who saw Hitler as an opportunist, accepted that Prague destroyed any claim that Hitler wanted only to unite Germans.'
},
{
  id: 'nazisoviet', lv: 'both', date: 'August 1939', title: 'The Devil’s Pact',
  ldr: 'hitler', speaker: 'stalin',
  said: 'Britain and France send a slow boat and junior officers. Herr Ribbentrop flies.',
  brief: 'Hitler fears a two-front war. He is preparing to attack Poland, while Britain and France negotiate, half-heartedly, with the USSR. Stalin distrusts the Western powers after Munich, where he was not invited.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Abandon the plans against Poland.', x: 'The attack, codenamed Case White, was already scheduled. Hitler was determined to strike in 1939.' },
    { t: 'Sign a non-aggression pact with the USSR, with a secret protocol dividing Poland and the Baltic states between them.' },
    { t: 'Attack the USSR first.', x: 'That came in 1941. In 1939 Hitler needed the USSR neutral so he could deal with Poland and the West.' },
    { t: 'Join the Anglo-French talks with Moscow.', a: true, x: 'Hitler wanted to wreck those talks, not join them.' }
  ],
  ans: 1,
  out: 'On 23 August 1939 Ribbentrop and Molotov signed the Nazi–Soviet Pact. A secret protocol divided Eastern Europe between them. The two sworn enemies stunned the world, and Hitler now expected no two-front war.',
  head: 'NAZI–SOVIET PACT STUNS THE WORLD',
  fx: { tens: 14, mark: [{ id: 'moscow', kind: 'deal', label: 'Nazi–Soviet Pact 1939' }] },
  focus: [28, 54, 4],
  exam: 'The pact made war over Poland almost certain. Explain why both sides signed.',
  hist: 'Soviet historians long argued the pact bought time after Western appeasement. Critics point to the secret protocol and Soviet territorial gains.'
},
{
  id: 'poland', lv: 'both', date: 'September 1939', title: 'Fall Weiss',
  ldr: 'hitler', speaker: 'hitler',
  said: 'Our enemies are small worms. I saw them at Munich.',
  saidReal: true,
  brief: 'Britain and France have guaranteed Poland, but after Munich Hitler believes they will not really fight. He demands Danzig and a route across the Polish Corridor. Poland refuses.',
  ask: 'What does Hitler do?',
  opts: [
    { t: 'Invade Poland on 1 September.' },
    { t: 'Accept Mussolini’s call for a new peace conference.', x: 'Hitler did not want another Munich. He wanted his war with Poland.' },
    { t: 'Hold back and negotiate over Danzig.', x: 'Germany’s demands were a pretext. The invasion was planned for the end of August.' },
    { t: 'Take only Danzig and stop there.', a: true, x: 'Hitler’s plan was the destruction of Poland, agreed in secret with Stalin.' }
  ],
  ans: 0,
  out: 'Germany invaded Poland on 1 September 1939 after a faked Polish “attack” at Gleiwitz. On 3 September Britain and France declared war. On 17 September the Red Army invaded eastern Poland. The Second World War had begun.',
  head: 'WAR!',
  fx: { tens: 30, auth: -10, mark: [{ id: 'warsaw', kind: 'war', label: 'Invasion of Poland 1939' }, { id: 'danzig', kind: 'war', label: 'Danzig 1939' }] },
  focus: [19, 52, 6],
  exam: 'Final key question: why had peace collapsed by 1939? Link Hitler’s aims, appeasement, the League’s failure and the Nazi–Soviet Pact.',
  hist: 'Taylor argued that Hitler blundered into a general war he had not intended in 1939. Most historians since, including Richard Overy, see a gamble taken knowingly.'
}
];
