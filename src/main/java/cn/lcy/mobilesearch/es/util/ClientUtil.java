package cn.lcy.mobilesearch.es.util;

import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.transport.TransportAddress;

import java.net.InetSocketAddress;

public class ClientUtil {

    private static Client transportClient;

    /**
     * 获取客户端
     *
     * @param clusterName
     * @param ipAddress
     * @param port
     * @return
     */
    public static Client getTransportClient(String clusterName, String ipAddress, int port) {

        Settings settings = Settings.settingsBuilder()
                .put("cluster.name", clusterName)
                .put("client.transport.sniff", true)
                .build();

        InetSocketAddress inetSocketAddress = new InetSocketAddress(ipAddress, port);
        TransportAddress transportAddress = new InetSocketTransportAddress(inetSocketAddress);
        transportClient = new TransportClient.Builder().settings(settings).build()
                .addTransportAddress(transportAddress);

        return transportClient;
    }

}
