const e=JSON.parse('{"key":"v-f9f4fa1e","path":"/computer-science/algorithm/0001%E3%80%81%E4%BA%8C%E5%8F%89%E6%A0%91.html","title":"二叉树","lang":"zh-CN","frontmatter":{"title":"二叉树","date":"2022-06-23T00:00:00.000Z","category":["LeetCode"],"tag":["二叉树"],"description":"通常二叉树有两种做法，分别对应着回溯算法和动态规划： 1. 一次遍历二叉树：用 traverse 函数配合外部变量，实质上是一个回溯框架； 2. 分解问题：通过分解为左右子树问题解决，实质上是动态规划。 一次遍历（回溯） 二叉树的最大深度 (https://leetcode.cn/problems/maximum-depth-of-binary-tre...","head":[["meta",{"property":"og:url","content":"https://yanfancode.github.io/blog/blog/computer-science/algorithm/0001%E3%80%81%E4%BA%8C%E5%8F%89%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"My Konwledge Base"}],["meta",{"property":"og:title","content":"二叉树"}],["meta",{"property":"og:description","content":"通常二叉树有两种做法，分别对应着回溯算法和动态规划： 1. 一次遍历二叉树：用 traverse 函数配合外部变量，实质上是一个回溯框架； 2. 分解问题：通过分解为左右子树问题解决，实质上是动态规划。 一次遍历（回溯） 二叉树的最大深度 (https://leetcode.cn/problems/maximum-depth-of-binary-tre..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-31T09:43:34.000Z"}],["meta",{"property":"article:author","content":"yanfan"}],["meta",{"property":"article:tag","content":"二叉树"}],["meta",{"property":"article:published_time","content":"2022-06-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-31T09:43:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二叉树\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-31T09:43:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"yanfan\\",\\"url\\":\\"https://github.com/YanFanCode/blog\\",\\"email\\":\\"2595437938@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"一次遍历（回溯）","slug":"一次遍历-回溯","link":"#一次遍历-回溯","children":[{"level":3,"title":"二叉树的最大深度","slug":"二叉树的最大深度","link":"#二叉树的最大深度","children":[]},{"level":3,"title":"路径总和","slug":"路径总和","link":"#路径总和","children":[]},{"level":3,"title":"路径总和Ⅱ","slug":"路径总和ii","link":"#路径总和ii","children":[]},{"level":3,"title":"求根节点到叶节点数字之和","slug":"求根节点到叶节点数字之和","link":"#求根节点到叶节点数字之和","children":[]},{"level":3,"title":"二叉树的所有路径","slug":"二叉树的所有路径","link":"#二叉树的所有路径","children":[]},{"level":3,"title":"左叶子之和","slug":"左叶子之和","link":"#左叶子之和","children":[]}]},{"level":2,"title":"分解问题（动态规划）","slug":"分解问题-动态规划","link":"#分解问题-动态规划","children":[{"level":3,"title":"二叉树的最大深度","slug":"二叉树的最大深度-1","link":"#二叉树的最大深度-1","children":[]},{"level":3,"title":"二叉树的最小深度","slug":"二叉树的最小深度","link":"#二叉树的最小深度","children":[]},{"level":3,"title":"平衡二叉树","slug":"平衡二叉树","link":"#平衡二叉树","children":[]},{"level":3,"title":"相同的树","slug":"相同的树","link":"#相同的树","children":[]},{"level":3,"title":"对称二叉树","slug":"对称二叉树","link":"#对称二叉树","children":[]},{"level":3,"title":"二叉树展开为链表","slug":"二叉树展开为链表","link":"#二叉树展开为链表","children":[]},{"level":3,"title":"翻转二叉树","slug":"翻转二叉树","link":"#翻转二叉树","children":[]},{"level":3,"title":"二叉树的最近公共祖先","slug":"二叉树的最近公共祖先","link":"#二叉树的最近公共祖先","children":[]},{"level":3,"title":"出现次数最多的子树元素和","slug":"出现次数最多的子树元素和","link":"#出现次数最多的子树元素和","children":[]}]},{"level":2,"title":"层序遍历","slug":"层序遍历","link":"#层序遍历","children":[{"level":3,"title":"二叉树的层序遍历","slug":"二叉树的层序遍历","link":"#二叉树的层序遍历","children":[]},{"level":3,"title":"二叉树的锯齿层序遍历","slug":"二叉树的锯齿层序遍历","link":"#二叉树的锯齿层序遍历","children":[]},{"level":3,"title":"填充每个节点的下一个右侧节点指针","slug":"填充每个节点的下一个右侧节点指针","link":"#填充每个节点的下一个右侧节点指针","children":[]},{"level":3,"title":"二叉树的右视图","slug":"二叉树的右视图","link":"#二叉树的右视图","children":[]},{"level":3,"title":"完全二叉树的节点个数","slug":"完全二叉树的节点个数","link":"#完全二叉树的节点个数","children":[]},{"level":3,"title":"找树左下角的值","slug":"找树左下角的值","link":"#找树左下角的值","children":[]}]},{"level":2,"title":"构造","slug":"构造","link":"#构造","children":[{"level":3,"title":"从前序与中序遍历构造二叉树","slug":"从前序与中序遍历构造二叉树","link":"#从前序与中序遍历构造二叉树","children":[]},{"level":3,"title":"从中序和后序遍历构造二叉树","slug":"从中序和后序遍历构造二叉树","link":"#从中序和后序遍历构造二叉树","children":[]},{"level":3,"title":"二叉树的序列化与反序列化","slug":"二叉树的序列化与反序列化","link":"#二叉树的序列化与反序列化","children":[]}]}],"git":{"createdTime":1693475014000,"updatedTime":1693475014000,"contributors":[{"name":"yanfan","email":"2595437938@qq.com","commits":1}]},"readingTime":{"minutes":8.1,"words":2430},"filePathRelative":"computer-science/algorithm/0001、二叉树.md","localizedDate":"2022年6月23日","excerpt":"","autoDesc":true}');export{e as data};
