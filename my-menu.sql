/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100128
 Source Host           : localhost:3306
 Source Schema         : my-menu

 Target Server Type    : MySQL
 Target Server Version : 100128
 File Encoding         : 65001

 Date: 19/02/2018 18:17:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for food_list
-- ----------------------------
DROP TABLE IF EXISTS `food_list`;
CREATE TABLE `food_list`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '菜谱id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜谱名称',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜谱描述，不超过150个字符',
  `type` enum('chao','dun','tang','mianshi') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'chao' COMMENT '菜谱类型',
  `imgpath` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜谱图片路径',
  `created` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `updated` datetime(0) NULL DEFAULT NULL COMMENT '修改日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of food_list
-- ----------------------------
INSERT INTO `food_list` VALUES (1, '腐竹炒肉', '豆制品的一种。比较有嚼劲，夏天凉拌来吃吃吃吃吃吃吃吃吃。', 'chao', NULL, '2018-02-17 16:50:49', NULL);
INSERT INTO `food_list` VALUES (2, '家常豆腐', '豆腐、鸡蛋、青椒、红椒、木耳、老干妈豆豉、泡椒、生抽、老抽、鸡精、糖、水、水淀粉', 'chao', NULL, '2018-02-19 14:26:00', NULL);
INSERT INTO `food_list` VALUES (3, '干煸四季豆', '四季豆、猪肉末、姜末、蒜末、料酒、生抽、盐、白糖、鸡精、葱花', 'chao', NULL, '2018-02-19 14:26:36', NULL);
INSERT INTO `food_list` VALUES (4, '青椒肉丝', '里脊肉、青椒、红椒、姜丝、葱丝、盐、鸡精、料洒、生抽、水淀粉', 'chao', NULL, '2018-02-19 14:27:28', NULL);
INSERT INTO `food_list` VALUES (5, '肉末茄子', '中等身形的茄子、猪肉末、姜末、葱末、蒜末、生抽、料酒、白砂糖、盐、淀粉、豆瓣酱', 'chao', NULL, '2018-02-19 14:28:00', NULL);
INSERT INTO `food_list` VALUES (6, '肉末冬瓜', '肉末、冬瓜、姜、小葱、油、盐、生抽、糖', 'dun', NULL, '2018-02-19 14:28:30', NULL);
INSERT INTO `food_list` VALUES (7, '豆芽炒肉丝', '黄豆芽、肉丝、酱油、料酒、盐、姜丝、油、葱花', 'chao', NULL, '2018-02-19 14:28:49', NULL);
INSERT INTO `food_list` VALUES (8, '红烧排骨冬瓜', '排骨、冬瓜、葱、姜、花椒、八角、盐、糖、生抽', 'dun', NULL, '2018-02-19 14:29:27', NULL);
INSERT INTO `food_list` VALUES (9, '回锅肉', '五花肉、青蒜、花椒、姜片、郫县豆瓣酱、料酒、白糖、盐、生抽', 'chao', NULL, '2018-02-19 14:32:42', NULL);
INSERT INTO `food_list` VALUES (10, '枣庄辣子鸡', '本地草鸡、青椒、小米椒（泰椒）、大葱、姜、蒜、花椒、酱油（生抽、老抽）、八角、土豆', 'chao', NULL, '2018-02-19 14:33:14', NULL);
INSERT INTO `food_list` VALUES (11, '肉沫豆角', '豆角、猪肉碎、小米椒、大葱 大蒜、生抽、糖、老抽、淀粉、料酒、盐、植物油', 'chao', NULL, '2018-02-19 14:33:35', NULL);
INSERT INTO `food_list` VALUES (12, '萝卜汤', '萝卜、清水，食盐，面粉，胡椒面，虾皮，紫菜', 'tang', NULL, '2018-02-19 14:36:12', NULL);
INSERT INTO `food_list` VALUES (13, '老式鸡蛋汤', '水、淀粉、黑胡椒粉、醋、鸡蛋、肉、葱', 'tang', NULL, '2018-02-19 14:36:34', NULL);
INSERT INTO `food_list` VALUES (14, '蘑菇鸡蛋汤', '平菇、鸡蛋、葱、香菜、盐、油', 'tang', NULL, '2018-02-19 14:36:59', NULL);
INSERT INTO `food_list` VALUES (15, '孕妇食谱鲫鱼汤', '鲫鱼、姜、葱花、盐', 'tang', NULL, '2018-02-19 14:37:36', NULL);
INSERT INTO `food_list` VALUES (16, '红烧鱼', '鲜鱼、葱姜蒜、生抽、米醋、白酒、糖、鸡精', 'dun', NULL, '2018-02-19 14:39:01', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `uid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '手机号',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `language` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户使用的多语言',
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '18765900190', '', 'Test,123', 'zh');

SET FOREIGN_KEY_CHECKS = 1;
