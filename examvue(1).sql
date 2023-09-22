-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2023 年 09 月 22 日 03:34
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `examvue`
--

-- --------------------------------------------------------

--
-- 表的结构 `datainfo`
--

CREATE TABLE IF NOT EXISTS `datainfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) CHARACTER SET utf8 NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 NOT NULL,
  `num` varchar(255) CHARACTER SET utf8 NOT NULL,
  `frequency` varchar(255) CHARACTER SET utf8 NOT NULL,
  `remark` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1008 ;

--
-- 转存表中的数据 `datainfo`
--

INSERT INTO `datainfo` (`id`, `brand`, `type`, `num`, `frequency`, `remark`) VALUES
(1, '大师傅', '发送到发', '1个', '3分钟1次', '发的说发'),
(2, '阿斯顿发', '阿斯顿发', '2个', '3分钟1次', '埃尔文发'),
(3, '商务豪华版', 'SH01', '5个', '1小时1次', '这是备注'),
(4, '昂贵的双方各', '大概', '2个', '5分钟1次', '啥地方官'),
(5, '租赁版', 'ZL001', '5个', '2分钟1次', '这是备注'),
(6, '普及版', 'BZ03', '5个', '3分钟1次', '嗡嗡嗡'),
(7, '超级无敌豪华版', 'dbs', '5个', '10分钟1次', '牛牛牛牛'),
(8, '商务豪华版', 'SH01', '5个', '1小时1次', '请问请问'),
(9, '租赁版', 'ZL003', '5个', '2分钟1次', '哇哇哇哇'),
(10, '租赁版', 'ZL004', '6个', '2分钟1次', 'oioi'),
(1004, 'adsf ', 'asdf ', '5个', '10分钟1次', '牛牛'),
(1005, '发送到发', '阿斯顿发', '1个', '3分钟1次', '阿斯顿发'),
(1006, '大丈夫', '阿斯顿发', '3个', '5分钟1次', '大师傅'),
(1007, '大傻子', '大', '2个', '8分钟1次', '打算发送到发');

-- --------------------------------------------------------

--
-- 表的结构 `tuisong`
--

CREATE TABLE IF NOT EXISTS `tuisong` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `pingtai` varchar(255) DEFAULT NULL,
  `mubiao` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `qian` varchar(255) DEFAULT NULL,
  `context` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1023 ;

--
-- 转存表中的数据 `tuisong`
--

INSERT INTO `tuisong` (`id`, `title`, `time`, `pingtai`, `mubiao`, `age`, `qian`, `context`) VALUES
(1022, '一元购净水机计划', '2023-09-20T08:13:24.780Z', 'Andriod', '女性', '90', '1000-1500', '特价净水机，消费满1999元可享受抽奖活动，最高可1元换购价值2999的净水机一台'),
(1021, '净水机售后补贴政策', '2023-09-20T08:05:10.756Z', 'ios', '女性', '80', '1000-1500', '非常感谢购买本公司的产品，凭借国际化研发技术平台，不断提升产品品质，开发出世界一流的净水产品，为用户带来了前所未有的健康、放心的品质好水，为反馈用户的支持，凡是公司的老顾客，双12期间再次购买全部3折~预购从速！！！'),
(1018, '阿范德萨', '2023-09-20T06:08:20.217Z', 'Andriod', '男性', '90', '500-1000', '阿斯顿发'),
(1019, '大师傅', '2023-09-20T06:08:59.954Z', 'Andriod', '男性', '80', '1000-1500', '阿斯顿发'),
(1020, '新款净水机产品发布会', '2023-09-20T08:05:10.756Z', 'Andriod', '男性', '00', '5000以下', '巴拉巴拉巴拉哔哩哔哩打算发送到发士大夫哈设计费大煞风景开鲁大师几号发奥斯卡了发卡视角福利卡丝芙兰是菲拉斯就付款啦实际开发了');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(255) CHARACTER SET utf8 NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 NOT NULL,
  `pwd` varchar(255) CHARACTER SET utf8 NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`,`pid`) USING BTREE
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `pid`, `username`, `pwd`, `img`) VALUES
(1, '1', '张三', '123', '1.jpg'),
(2, '1695265811344', '王五', '123', '1.jpg'),
(3, '1695265898884', '火男', '123', '1.jpg'),
(4, '1695266160495', '金福地', '123', '1.jpg'),
(5, '1695266834394', '岳山', '123456', '1.jpg'),
(6, '1695297993129', 'iii', '55', '1.jpg'),
(7, '2147483647', '李四', '123', '1.jpg');
