---
title: 配置宝塔面板
date: 2021-05-12
category:
  - 工程化
tag:
  - 项目部署
---

:::tip
服务器系统：centos 7.9。

其他系统可以参照[官网](https://www.bt.cn/bbs/thread-19376-1-1.html)
:::

## 安装宝塔面板

```bash
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

大概过两分钟即可安装成功，复制外网面板地址到浏览器打开，输入下面的 `username` 和 `password`。进去之后会弹出 `推荐安装套件`，因为只要部署 `vuepress`， 因此这里安装 `nginx` 就好。选择编译安装，更加稳定。

![安装宝塔](/assets/image/backend/server/003/step1-install-bt.png)

![安装nginx](/assets/image/backend/server/003/step2-install-nginx.png)

如果之后忘记用户名和密码，可以通过以下命令查找：

```bash
[root@xxxx ~]# bt
[root@xxxx ~]# 14
```

## 参考链接

[宝塔Linux面板安装教程](https://www.bt.cn/bbs/thread-19376-1-1.html)

[阿里云服务器ECS新手搭建网站视频教程（详细版）](https://www.bilibili.com/video/BV12T4y1N7T9?from=search&seid=2220018938681661072&spm_id_from=333.337.0.0)