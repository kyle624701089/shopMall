/*
Navicat MySQL Data Transfer

Source Server         : kyle
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : springboot

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2017-11-15 16:30:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `product_detail`
-- ----------------------------
DROP TABLE IF EXISTS `product_detail`;
CREATE TABLE `product_detail` (
  `ID` varchar(255) NOT NULL,
  `PRODUCT_ID` varchar(255) DEFAULT NULL,
  `DETAIL_NAME` varchar(255) DEFAULT NULL,
  `SHOW_ORDER` int(5) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_detail
-- ----------------------------
INSERT INTO `product_detail` VALUES ('1', '1', '项目介绍', '1');
INSERT INTO `product_detail` VALUES ('2', '1', '注意事项', '2');
INSERT INTO `product_detail` VALUES ('3', '1', '下单需求', '3');
