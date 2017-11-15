/*
Navicat MySQL Data Transfer

Source Server         : kyle
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : springboot

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2017-11-15 16:30:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `product_detail_info`
-- ----------------------------
DROP TABLE IF EXISTS `product_detail_info`;
CREATE TABLE `product_detail_info` (
  `ID` varchar(255) NOT NULL,
  `PRODUCT_DETAIL_ID` varchar(255) DEFAULT NULL,
  `DETAIL_RANGE` varchar(255) DEFAULT NULL,
  `DETAIL_INTRO` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_detail_info
-- ----------------------------
INSERT INTO `product_detail_info` VALUES ('1', '1', '适用于', '适用机关工作、白领人士和上班一族由于工作压力大，缺乏锻炼或经常熬夜所致的疲乏、眼干涩、皮肤松弛，腰酸背痛等人群。');
INSERT INTO `product_detail_info` VALUES ('2', '1', '功效', '应用惠益生中医外治法之按摩手法，可快速缓解肌肉劳损，缓解疲劳，疏通经络，放松精神，改善气血运行，保持几题的阴阳平衡。');
INSERT INTO `product_detail_info` VALUES ('3', '1', '理疗流程', '1、体位(卧位)；2、部位：');
