package org.winterdev.SakuraChat.Util;

import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.plugin.Plugin;
import org.winterdev.SakuraChat.SakuraChat;

import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;

public class LangUtil {
    private static YamlConfiguration langConfig;
    private static String langFile;

    public static void init(Plugin plugin) {
        FileConfiguration config = SakuraChat.getPlugin().getConfig();
        langFile = config.getString("lang");
        if (langFile == null || langFile.isEmpty()) {
            plugin.getLogger().severe("Language file not specified in config!");
            return;
        }
        InputStream inputStream = plugin.getResource("langs/" + langFile);
        if (inputStream == null) {
            plugin.getLogger().severe("Language file not found: langs/" + langFile);
            return;
        }
        langConfig = YamlConfiguration.loadConfiguration(new InputStreamReader(inputStream));
    }

    public static String message(String key) {
        if (langConfig == null) {
            return "Language not initialized!";
        }
        return langConfig.getString(key, "Message not found");
    }

    public static void reloadMessages(Plugin plugin) {
        File file = new File(plugin.getDataFolder(), "langs/" + langFile);
        if (!file.exists()) {
            plugin.getLogger().severe("Language file not found: " + file.getAbsolutePath());
            return;
        }
        langConfig = YamlConfiguration.loadConfiguration(file);
    }

    public static boolean isLanguageInUse(String lang) {
        File langFile = new File(SakuraChat.getPlugin().getDataFolder() + "/langs/" + lang + ".yml");
        return langFile.exists() && lang.equals(LangUtil.langFile.replace(".yml", ""));
    }
}
