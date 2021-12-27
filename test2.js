LazyMan("Hank")//输出:
// Hi! This is Hank !
LazyMan("Hank").sleep(3).eat("dinner")//输出:
// Hi! This is Hank !/1等待3秒
// wake up after 3l/ Eat dinner~
LazyMan("Hank").eat("lunch").eat("dinner")//输出:
// Hi! This is Hank! //Eat lunch~
// Eat dinner~
LazyMan("Hank").sleepFirst(2).eat("lunch").sleep(3).eat("dinner")// 输出:
// 等待2秒
// wake up after 2/ / Hi! This is Hank / /Eat lunch~
///等待3秒
// wake up after 3l / Eat dinner~
//以此类推
