/**
如果单词列表（words）中的一个单词包含牌照（licensePlate）中所有的字母，那么我们称之为完整词。在所有完整词中，最短的单词我们称之为最短完整词。

单词在匹配牌照中的字母时不区分大小写，比如牌照中的 "P" 依然可以匹配单词中的 "p" 字母。

我们保证一定存在一个最短完整词。当有多个单词都符合最短完整词的匹配条件时取单词列表中最靠前的一个。

牌照中可能包含多个相同的字符，比如说：对于牌照 "PP"，单词 "pair" 无法匹配，但是 "supper" 可以匹配。

示例 1：

输入：licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
输出："steps"
说明：最短完整词应该包括 "s"、"p"、"s" 以及 "t"。对于 "step" 它只包含一个 "s" 所以它不符合条件。同时在匹配过程中我们忽略牌照中的大小写。

示例 2：

输入：licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
输出："pest"
说明：存在 3 个包含字母 "s" 且有着最短长度的完整词，但我们返回最先出现的完整词。

注意:

牌照（licensePlate）的长度在区域[1, 7]中。
牌照（licensePlate）将会包含数字、空格、或者字母（大写和小写）。
单词列表（words）长度在区间 [10, 1000] 中。
每一个单词 words[i] 都是小写，并且长度在区间 [1, 15] 中。
*/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

var shortestCompletingWord = function(licensePlate, words) {
  licensePlate = licensePlate.toLocaleLowerCase();
  licensePlate = licensePlate.replace(/\s|\d/g, '');
  const licensePlates = licensePlate.split('');
  // 因为数组长度过大，采用了快排，可能导致排序不准，需要手动排序
  let wordsMap = {};
  for (let i = 0, l = words.length; i < l; i++) {
    let word = words[i];
    let len = word.length;
    if (!wordsMap[len]) {
      wordsMap[len] = [];
    }
    wordsMap[len].push(word);
  }
  words = [];
  for (let i in wordsMap) {
    words = words.concat(wordsMap[i]);
  }
  for (let i = 0, l = words.length; i < l; i++) {
    let word = words[i];
    let licenses = [...licensePlates];
    for (let j = 0, jl = word.length; j < jl; j++) {
      let index = licenses.indexOf(word[j]);
      if (index >= 0) {
        licenses.splice(index, 1);
      }
      if (licenses.length === 0) {
        return word;
      }
    }
  }
  return null;
};

// console.log(shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])); // steps
// console.log(shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew', 'show'])); // pest(
let licensePlate = 'Ad46909';
let words = ['pressure', 'attack', 'first', 'these', 'town', 'enough', 'this', 'while', 'beat', 'data', 'crime', 'seek', 'stand', 'fish', 'prepare', 'college', 'under', 'kid', 'use', 'ever', 'ask', 'need', 'technology', 'ten', 'lie', 'help', 'sell', 'movement', 'develop', 'indeed', 'kill', 'could', 'budget', 'simple', 'girl', 'cause', 'state', 'yes', 'fact', 'must', 'pretty', 'affect', 'trouble', 'minute', 'grow', 'heat', 'within', 'structure', 'fall', 'child', 'herself', 'fight', 'risk', 'project', 'problem', 'prove', 'find', 'probably', 'operation', 'bad', 'perhaps', 'various', 'growth', 'at', 'president', 'daughter', 'open', 'all', 'account', 'away', 'democratic', 'father', 'serve', 'race', 'ok', 'bring', 'with', 'about', 'through', 'hospital', 'me', 'build', 'move', 'present', 'throughout', 'police', 'serious', 'education', 'reason', 'letter', 'sort', 'car', 'language', 'believe', 'report', 'worker', 'create', 'boy', 'stop', 'everyone', 'identify', 'worry', 'behavior', 'generation', 'turn', 'measure', 'begin', 'marriage', 'activity', 'owner', 'woman', 'music', 'nearly', 'free', 'story', 'certain', 'most', 'why', 'foot', 'available', 'skill', 'throw', 'company', 'safe', 'over', 'billion', 'south', 'hold', 'hit', 'as', 'alone', 'somebody', 'describe', 'election', 'economic', 'maybe', 'inside', 'leader', 'one', 'camera', 'three', 'our', 'economy', 'face', 'should', 'period', 'nature', 'study', 'type', 'add', 'hear', 'watch', 'option', 'along', 'late', 'food', 'sure', 'until', 'street', 'test', 'guy', 'expect', 'sign', 'pain', 'many', 'life', 'benefit', 'side', 'few', 'toward', 'bar', 'dead', 'if', 'game', 'assume', 'off', 'exist', 'force', 'after', 'pattern', 'practice', 'series', 'low', 'issue', 'piece', 'legal', 'day', 'best', 'result', 'quality', 'huge', 'despite', 'subject', 'student', 'appear', 'significant', 'people', 'step', 'take', 'per', 'behind', 'eight', 'war', 'knowledge', 'amount', 'edge', 'matter', 'meeting', 'great', 'require', 'east', 'reveal', 'bit', 'compare', 'choose', 'establish', 'course', 'large', 'building', 'difficult', 'wonder', 'organization', 'night', 'book', 'look', 'current', 'can', 'particular', 'where', 'human', 'join', 'mission', 'machine', 'policy', 'patient', 'gun', 'plant', 'recently', 'would', 'unit', 'willing', 'stuff', 'shoulder', 'realize', 'spend', 'than', 'call', 'walk', 'television', 'drive', 'you', 'cost', 'idea', 'increase', 'campaign', 'back', 'exactly', 'decade', 'trial', 'relate', 'live', 'six', 'reduce', 'cold', 'garden', 'card', 'color', 'his', 'talk', 'positive', 'major', 'change', 'southern', 'possible', 'general', 'meet', 'wondering', 'floor', 'area', 'job', 'environment', 'cell', 'standard', 'act', 'instead', 'happy', 'from', 'long', 'same', 'welcoming', 'reflect', 'model', 'class', 'door', 'bed', 'article', 'space', 'come', 'lose', 'power', 'degree', 'sex', 'imagine', 'message', 'do', 'week', 'national', 'smile', 'society', 'other', 'thought', 'good', 'well', 'scientist', 'green', 'health', 'fly', 'bag', 'newspaper', 'only', 'above', 'later', 'wait', 'truth', 'on', 'entire', 'own', 'such', 'fear', 'wrong', 'laugh', 'send', 'finish', 'arm', 'century', 'source', 'agree', 'research', 'school', 'include', 'they', 'put', 'moment', 'focus', 'cultural', 'address', 'cover', 'we', 'true', 'hard', 'full', 'person', 'plan', 'question', 'fast', 'together', 'quite', 'treat', 'dinner', 'carry', 'out', 'remove', 'fund', 'product', 'star', 'sometimes', 'player', 'coach', 'church', 'write', 'rule', 'vote', 'yeah', 'then', 'participant', 'couple', 'treatment', 'government', 'any', 'theory', 'nice', 'hot', 'friend', 'already', 'public', 'debate', 'wear', 'tough', 'common', 'five', 'suddenly', 'example', 'understand', 'maintain', 'love', 'upon', 'will', 'simply', 'artist', 'answer', 'lay', 'analysis', 'place', 'eye', 'cut', 'when', 'city', 'science', 'always', 'now', 'decide', 'local', 'program', 'clear', 'central', 'home', 'management', 'party', 'here', 'evidence', 'word', 'production', 'nor', 'discover', 'and', 'choice', 'road', 'money', 'shake', 'image', 'left', 'black', 'market', 'that', 'single', 'number', 'contain', 'opportunity', 'start', 'oil', 'condition', 'style', 'become', 'purpose', 'charge', 'former', 'today', 'right', 'more', 'raise', 'go', 'goal', 'which', 'anyone', 'training', 'may', 'oh', 'welcomed', 'nation', 'a', 'position', 'make', 'news', 'across', 'fine', 'everybody', 'action', 'order', 'work', 'line', 'industry', 'shoot', 'service', 'senior', 'hotel', 'interesting', 'factor', 'teach', 'visit', 'save', 'threat', 'yourself', 'there', 'business', 'so', 'her', 'recognize', 'big', 'civil', 'dream', 'recent', 'expert', 'eat', 'among', 'every', 'speech', 'likely', 'down', 'wish', 'resource', 'rate', 'dog', 'individual', 'sing', 'picture', 'surface', 'year', 'close', 'popular', 'beautiful', 'leg', 'apply', 'air', 'mean', 'even', 'follow', 'level', 'range', 'physical', 'support', 'say', 'political', 'foreign', 'age', 'environmental', 'still', 'stock', 'just', 'allow', 'list', 'traditional', 'energy', 'be', 'death', 'produce', 'part', 'store', 'red', 'able', 'blood', 'film', 'accept', 'value', 'not', 'rest', 'summer', 'its', 'deal', 'none', 'drug', 'price', 'water', 'middle', 'actually', 'their', 'note', 'section', 'argue', 'light', 'however', 'it', 'speak', 'half', 'weapon', 'experiencing', 'bill', 'room', 'very', 'success', 'attention', 'let', 'performance', 'population', 'collection', 'modern', 'suggest', 'brother', 'process', 'the', 'fail', 'personal', 'federal', 'us', 'animal', 'before', 'show', 'relationship', 'magazine', 'head', 'customer', 'blue', 'strong', 'stay', 'yard', 'man', 'spring', 'sport', 'land', 'name', 'indicate', 'provide', 'he', 'bank', 'victim', 'last', 'investment', 'situation', 'determine', 'seat', 'stage', 'lot', 'quickly', 'for', 'scene', 'approach', 'mouth', 'pull', 'respond', 'remain', 'short', 'audience', 'early', 'get', 'item', 'near', 'record', 'catch', 'she', 'court', 'authority', 'between', 'whatever', 'wide', 'care', 'fire', 'have', 'certainly', 'fill', 'young', 'wind', 'difference', 'base', 'husband', 'feel', 'reality', 'mother', 'executive', 'who', 'poor', 'new', 'employee', 'perform', 'wall', 'evening', 'agent', 'material', 'author', 'several', 'drop', 'both', 'outside', 'usually', 'information', 'way', 'others', 'sit', 'agreement', 'case', 'hang', 'buy', 'tree', 'box', 'soon', 'dark', 'involve', 'hundred', 'official', 'institution', 'ago', 'remember', 'lawyer', 'deep', 'law', 'phone', 'career', 'event', 'never', 'religious', 'page', 'role', 'chance', 'enjoy', 'each', 'wife', 'impact', 'also', 'international', 'rock', 'key', 'notice', 'memory', 'manage', 'paper', 'movie', 'clearly', 'group', 'of', 'check', 'end', 'pass', 'hand', 'community', 'claim', 'method', 'writer', 'see', 'rise', 'keep', 'mind', 'cancer', 'thus', 'term', 'since', 'hour', 'final', 'heavy', 'natural', 'skin', 'learn', 'either', 'represent', 'shot', 'hope', 'including', 'finger', 'your', 'occur', 'rich', 'easy', 'around', 'tend', 'old', 'guess', 'sea', 'baby', 'west', 'challenge', 'season', 'listen', 'radio', 'think', 'welcome', 'almost', 'far', 'whose', 'travel', 'private', 'up', 'reach', 'those', 'firm', 'according', 'next', 'itself', 'team', 'pick', 'special', 'explain', 'agency', 'manager', 'security', 'trip', 'play', 'song', 'task', 'weight', 'teacher', 'him', 'candidate', 'offer', 'thing', 'office', 'enter', 'country', 'ground', 'board', 'doctor', 'but', 'financial', 'parent', 'my', 'consumer', 'whether', 'happen', 'tonight', 'forward', 'military', 'ready', 'peace', 'break', 'myself', 'might', 'kind', 'suffer', 'citizen', 'future', 'improve', 'much', 'art', 'miss', 'effort', 'want', 'tell', 'high', 'how', 'little', 'or', 'no', 'chair', 'second', 'third', 'property', 'character', 'officer', 'conference', 'give', 'avoid', 'mention', 'read', 'without', 'receive', 'different', 'in', 'pay', 'capital', 'really', 'small', 'necessary', 'win', 'particularly', 'once', 'commercial', 'nothing', 'violence', 'similar', 'interview', 'western', 'world', 'ball', 'lead', 'site', 'admit', 'wishing', 'window', 'loss', 'what', 'four', 'decision', 'anything', 'computer', 'field', 'seven', 'point', 'protect', 'front', 'strategy', 'know', 'defense', 'working', 'something', 'thank', 'family', 'response', 'disease', 'size', 'themselves', 'share', 'partner', 'table', 'adult', 'experience', 'feeling', 'specific', 'himself', 'north', 'whom', 'trade', 'control', 'hair', 'especially', 'born', 'thousand', 'time', 'important', 'finally', 'because', 'often', 'sister', 'set', 'like', 'top', 'prevent', 'seem', 'push', 'social', 'experienced', 'ahead', 'glass', 'draw', 'else', 'body', 'concern', 'score', 'past', 'direction', 'soldier', 'system', 'sexual', 'director', 'staff', 'view', 'majority', 'better', 'against', 'house', 'discuss', 'less', 'painting', 'someone', 'sound', 'form', 'media', 'ability', 'real', 'detail', 'culture', 'total', 'although', 'try', 'during', 'medical', 'forget', 'politics', 'cup', 'white', 'run', 'some', 'figure', 'yet', 'least', 'statement', 'discussion', 'leave', 'interest', 'return', 'to', 'design', 'voice', 'effect', 'heart', 'tax', 'successful', 'gas', 'professional', 'though', 'into', 'continue', 'by', 'whole', 'son', 'sense', 'another', 'network', 'development', 'everything', 'kitchen', 'morning', 'million', 'attorney', 'station', 'them', 'administration', 'member', 'main', 'responsibility', 'arrive', 'month', 'professor', 'too', 'region', 'beyond', 'again', 'center', 'onto', 'consider', 'rather', 'two', 'history', 'worrying', 'die'];
console.time('计算耗时');
for (let i = 0; i < 10000; i++) {
  console.log(shortestCompletingWord(licensePlate, words)); // bad
}
console.timeEnd('计算耗时');
